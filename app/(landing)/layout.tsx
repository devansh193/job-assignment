import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div>
      <Navbar session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
