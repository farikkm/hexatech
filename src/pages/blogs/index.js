import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Blogs Page</h1>
      <Link href={`/blogs/news/2025-08-20/nextjs-released`}>Next.js</Link>
    </>
  );
}
