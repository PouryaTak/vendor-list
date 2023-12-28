import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1>This page intentionally left blank</h1>
      <Link href={"/restaurant"}>Show me Restaurants</Link>
    </main>
  )
}
