import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { auth } from "@/auth";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await auth();

  return (
    <div>
      <Navbar session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
