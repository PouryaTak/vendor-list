import styled from "styled-components";

export const VendorCard = styled.section`
  --card-color: #fff;
  --card-border-radius: 6px;

  width: 100%;
  height: max-content;
  background-color: var(--card-color);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  box-shadow: 0 4px 8px 0px rgb(0 0 0 / 0.07);
`;

export const VendorCard_coverImage = styled.img`
  width: 100%;
  height: 114px;
  background-color: #eee;
  background-image: url("/image/snapp-watermark.svg");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const VendorCard_content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 16px;
`;

export const VendorCard_logoContainer = styled.div`
  --size: 64px;

  width: var(--size);
  height: var(--size);
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 0.1);
  position: absolute;
  top: -54px;
  right: 10px;
  z-index: 20;
`;

export const VendorCard_logo = styled.img`
  background: #eee;
  width: 100%;
  height: 100%;
  background-image: url("/image/snapp-watermark.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 6px;
`;

export const VendorCard_title = styled.h3`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VendorCard_rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  font-size: 12px;
`;

export const VendorCard_rating__score = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 4px;
  font-weight: 500;
  align-items: center;
  background: #3a5c170d;
  color: #3a5c17;
`;

export const VendorCard_rating__votes = styled.div`
  color: #a3a3a3;
`;

export const VendorCard_description = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VendorCard_delivery__type = styled.p`
  font-size: 14px;
  color: #a3a3a3;
`;

export const VendorCard_delivery__fee = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & > span {
    font-size: 14px;
  }
`;
