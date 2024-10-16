import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              100xEngineers
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Join India&apos;s most rapidly growing developer community and
              find your next opportunity.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white w-full sm:w-auto"
              />
              <Button
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              For Job Seekers
            </h3>
            <ul className="space-y-2">
              {["Browse Jobs", "Companies", "Salary Guide", "Resources"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              For Employers
            </h3>
            <ul className="space-y-2">
              {["Post a Job", "Pricing", "Resources", "Partnerships"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {[
              {
                name: "GitHub",
                icon: Github,
                href: "https://github.com/100xengineers",
              },
              {
                name: "Twitter",
                icon: Twitter,
                href: "https://twitter.com/100xengineers",
              },
              {
                name: "LinkedIn",
                icon: Linkedin,
                href: "https://www.linkedin.com/company/100xengineers",
              },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-gray-500"
                aria-label={`${social.name} profile`}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <p>
              &copy; {new Date().getFullYear()} 100xEngineers. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
