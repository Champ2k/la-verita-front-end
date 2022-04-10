import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: auto;
  overflow: hidden;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;
export const Header = styled.div<{ isActive: boolean }>`
  border-right: 2px solid #f0ffff;
  padding: 16px 0px;
  background-color: #37434e;
  width: 100%;
  text-align: center;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #f0ffff;
    color: black;
    border-right: 2px solid #5ac77d;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: #d0ecd0;
      border-right: 2px solid #5ac77d;
      color: black;
    `}
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 100%;
  /* overflow: auto; */
  position: relative;
  /* max-height: 500px; */
`;

export const BodyText = styled.div`
  padding: 8px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  /* line-clamp: 1;
  -webkit-box-orient: vertical;  */
  color: white;
  :not(:last-child) {
    border-bottom: 1px solid black;
  }

  cursor: pointer;

  :hover {
    color: #d0ecd0;

    :not(:last-child) {
      border-bottom: 1px solid #d0ecd0;
    }
  }
`;
