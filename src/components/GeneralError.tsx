import { Flex } from "@/styles/utils/Flex.styled";
import React from "react";

export default function GeneralError() {
  return (
    <Flex $justifyContent="center" $alignItems="center" $direction="column">
      <h1>یه مشکلی پیش اومده!</h1>
      <p>اینجا جاییه که میتونیم ارور هندلینگی رو داشته باشیم</p>
    </Flex>
  );
}
