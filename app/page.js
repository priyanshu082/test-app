import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[100vh]">
      
<div className="mb-[20px] bg-zinc-500 p-[20px] w-fit">
      <Link href='/sign-in'>sign in</Link>
</div>

<div>
      <Link href='/sign-up'>sign up</Link>
</div>
    </div>
      );
}
