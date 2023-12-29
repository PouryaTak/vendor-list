"use client";
import { Flex } from "@/styles/utils/Flex.styled";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Flex $direction="column" $justifyContent="center" $alignItems="center">
        <h1>This page intentionally left blank</h1>
        <Link href={"/restaurant"}>Show me Restaurants</Link>
      </Flex>
    </main>
  );
}
