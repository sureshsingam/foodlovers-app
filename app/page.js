import Link from "next/link";
import Header from "@/components/header";


export default function Home() {
  console.log("Executing");
  return (
    <main>
      <Header />
      <h1> Welcome to this Next JS course!</h1>
      <p> 🔥 Let&apos;s get started! 🔥</p>
      <p> 
        <Link href="/about"> About </Link>
      </p>
      <p>
        <Link href="/blog"> Blog </Link>
      </p>
    </main>

  );
}
