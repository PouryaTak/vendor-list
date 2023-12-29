import styled from "styled-components";
import { VendorCard } from "./VendorVendorCard.styled";
import { SkeletonElement } from "../utils/SkeletonElement.style";

export const VendorVendorCardSkeleton = styled(VendorCard)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
`;

export const TextVendorCardSkeleton = styled.div`
  background: #fff;
  padding: 16px 16px 0;
`;

export const BoxSkeleton = styled(SkeletonElement)`
  height: 114px;
`;

export const TextSkeleton = styled(SkeletonElement)<{height?: string}>`
  height: ${({ height }) => height || "16px"};
`;
