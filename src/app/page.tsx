import LogoutBtn from "@/components/LogoutBtn";
import Link from "next/link";
import { FaTeamspeak } from "react-icons/fa";
import { GrArticle, GrInfo } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";


export default function Home() {
  return (
    <main >
      <div className="grid grid-cols-2 gap-4">
        <Link href={'tasks'} className="bg-sky-50 p-8 col-span-2 flex text-sky-400 flex-col gap-10 items-center justify-center rounded-md">
          <SiTicktick size={60} className="" />
          <h1 className="text-3xl font-bold">Check your task !</h1>
        </Link>
        <Link href={"about"} className="bg-sky-50 p-8 flex text-sky-400 flex-col gap-10 items-center justify-center rounded-md">
          <GrInfo size={30} className="" />
          <h6 className="text-xs font-medium">About us</h6>
        </Link>
        <Link href={"posts"} className="bg-sky-50 p-8 flex text-sky-400 flex-col gap-10 items-center justify-center rounded-md">
          <GrArticle size={30} className="" />
          <h6 className="text-xs font-medium">Posts</h6>
        </Link>
        <Link href={'/about'} className="bg-sky-50 p-8 flex text-sky-400 flex-col gap-10 items-center justify-center rounded-md">
          <FaTeamspeak size={30} className="" />
          <h6 className="text-xs font-medium">Contact us</h6>
        </Link>
        <LogoutBtn/>
      </div>
    </main>
  );
}
