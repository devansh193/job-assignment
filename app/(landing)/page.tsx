import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";
import Footer from "@/components/Footer";

const GitHubBadge = () => (
  <Link
    href="https://github.com/100xengineers"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors"
  >
    <Github className="mr-2 h-4 w-4" />
    Star us on GitHub
  </Link>
);

const LandingPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white">
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <section className="flex flex-col items-center justify-center text-center gap-8">
              <GitHubBadge />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl">
                Join the #1{" "}
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Job-Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                India&apos;s most rapidly growing developer community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href={"/explore"}>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg">
                    Find Jobs
                  </Button>
                </Link>
                <Link href={"/manage"}>
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
                  >
                    For Employers
                  </Button>
                </Link>
              </div>
            </section>

            <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Open Source",
                  description:
                    "All our code is open source and available on GitHub",
                },
                {
                  title: "Community Driven",
                  description: "Built by developers, for developers",
                },
                {
                  title: "Rapid Growth",
                  description: "Join India's fastest-growing tech community",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </section>

            <section className="mt-32 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Ready to accelerate your career?
              </h2>
              <Link href={"/sign-in"}>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg">
                  Join HireMe Now
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
