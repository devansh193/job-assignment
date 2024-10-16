
"use client";
import { useRouter } from "next/router";

const JobIdPage = () =>{
    const router = useRouter();
    const id = String(router.query);
    return (
        <main className="max-w-full mx-2">
            <div className="flex">
                <div className="w-64 pr-4 shrink-0 hidden md:block mt-4">
                </div>
                <div className="w-full">
                    <h1 className="text-4xl"> {id} </h1>
                </div>
            </div>
        </main>
    );
};

export default JobIdPage;