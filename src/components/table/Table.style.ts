import styled, { css } from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px;
`;
export const Header = styled.div<{ isActive: boolean }>`
  border-bottom: 1px solid black;
  padding: 16px 16px;
  background-color: #f0f8ff;
  cursor: pointer;
/* 
  :not(:last-child) {
    border-right: 1px solid black;
  } */

  :hover {
    background-color: #f0ffff;
    border-bottom: 1px solid transparent;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: #f0ffff;
      border-bottom: 1px solid transparent;
    `}
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BodyText = styled.div``