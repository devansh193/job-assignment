import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { ActiveJobs } from "@/components/active-jobs";
import { DataGrid } from "@/components/data-grid";
import { InActiveJobs } from "@/components/inactive-jobs";
const ManageJobsPage = async () => {
  const session = await auth();
  const role = session?.user.role;

  if (role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <DataGrid />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-2 mb-8 mt-2">
    <ActiveJobs />
    <InActiveJobs/>
    </div>
    </div>
  );
};

export default ManageJobsPage;
