import styled from "styled-components";

export const VendorCard = styled.section`
  width: 100%;
  height: max-content;
  background-color: #fff;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0px rgb(0 0 0 / 0.07);
`;

export const VendorCard_cover = styled.div`
  width: 100%;
  height: 114px;
  border-radius: 6px;
  background-color: #eee;
  background-image: url("/image/snapp-watermark.svg");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
  margin-bottom: 20px;
`;

export const VendorCard_cover__image = styled.img`
    border-radius: 6px;
    width: 100%;
    height:100%;
    filter: brightness(0.97);
    object-fit: cover;
`

export const VendorCard_content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const VendorCard_logoContainer = styled.div`
  --size: 54px;

  width: var(--size);
  height: var(--size);
  background: #fff;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 0.1);
  position: absolute;
  top: -64px;
  right: 8px;
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
  border-radius: 50%;
  border: 1px solid #fff3;
`;

export const VendorCard_title = styled.div`
  & > h3 {
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #404040;
  }
`;

export const VendorCard_rate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  font-size: 12px;
`;

export const VendorCard_rate__score = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 500;
  align-items: center;
  background: #40404012;
  color: #404040;
`;

export const VendorCard_rate__votes = styled.div`
  color: #a3a3a3;
`;

export const VendorCard_rate__separators = styled.span`
  color: #e6e6e6;
`;

// This line not used due to confirmation of current web page design. But see, I did it!
export const VendorCard_description = styled.p`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VendorCard_delivery = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  & > span {
    font-size: 12px;
  }
`;
