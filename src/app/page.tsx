import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Welcome to the Next.js App!</h1>
        <Link href="/products">View Products</Link>
      </div>
    </>
  )
}