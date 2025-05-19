import Link from "next/link";

export default function BlogPage(){
    return(
        <main>
        <p>
            <Link href="/blog/post-1"> blog Page</Link>
            <Link href="/blog/post-2"> blog Page</Link>
        </p>
        
        </main>
    );

}