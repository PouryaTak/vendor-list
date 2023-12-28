import styled from "styled-components";

export const Flex = styled.div<{justifyContent?: string, alignItems?: string, direction?: string, gap?: string, wrap?: string }>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "flex-start"};
  align-items: ${({alignItems}) => alignItems || "center"};
  flex-direction: ${({direction}) => direction || "row"};
  gap: ${({gap}) => gap || "0"};
  flex-wrap: ${({wrap}) => wrap || "nowrap"};
`;
