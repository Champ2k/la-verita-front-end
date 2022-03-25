import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 750px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px;
  justify-content: center;
`;
export const Header = styled.div<{ isActive: boolean }>`
  border-bottom: 1px solid black;
  padding: 16px 16px;
  background-color: #f0f8ff;
  cursor: pointer;

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
  align-items: flex-start;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

export const BodyText = styled.div`
  margin: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
