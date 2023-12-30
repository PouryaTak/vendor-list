import styled from "styled-components";

export const SkeletonElement = styled.div<{ width?: string; height?: string; borderRadius?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background: #e3e3e3;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-image: linear-gradient(to right, #e3e3e3 0%, #f6f7f8 20%, #e3e3e3 40%, #e3e3e3 100%);
  background-repeat: no-repeat;
  background-size: 100vw 100%; 
  animation: shimmer 1.5s infinite ease-in-out;

  @keyframes shimmer {
  0% {
    background-position: 100vw 0;
  }
  
  100% {
    background-position: -100vw 0; 
  }
}
`;
