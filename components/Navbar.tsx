"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logOutUser } from "@/actions/user";
import { Session } from "next-auth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import NewJobModal from "./NewJobModal";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavbarProps = {
  session: Session | null;
};

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Explore",
      route: "/jobs",
    },
  ];

  const handleSignOut = async () => {
    try {
      const response = await logOutUser();

      if (response?.status !== "success") {
        toast({
          variant: "destructive",
          title: response?.message || "An error occurred during sign out",
        });
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
      toast({
        variant: "destructive",
        title: "An error occurred during sign out",
      });
    }
  };

  const userRole = session?.user?.role;

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">HireMe</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.route} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              {userRole === "ADMIN" && (
                <>
                  <NavigationMenuItem>
                    <Link href="/manage" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Manage
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NewJobModal />
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.route} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                {userRole === "ADMIN" && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/manage" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Manage
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NewJobModal />
                    </NavigationMenuItem>
                  </>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            {!session ? (
              <Link href="/sign-up">
                <Button className="font-medium">Join Now</Button>
              </Link>
            ) : (
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="font-medium rounded-md"
              >
                Sign Out
              </Button>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
