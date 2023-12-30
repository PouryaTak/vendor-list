"use client";
import { Flex } from "@/styles/utils/Flex.styled";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Flex $direction="column" $justifyContent="center" $alignItems="center">
        <h1>اینجا عمدا خالی گذاشته شده</h1>
        <Link href={"/restaurant"}>بریم صفحه رستوران ها</Link>
      </Flex>
    </main>
  );
}
