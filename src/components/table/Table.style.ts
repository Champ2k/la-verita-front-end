import styled, { css } from "styled-components";
import { Sentiment } from "./Table";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: auto;
  overflow: hidden;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding-bottom: 24px;
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
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 500px;
  padding-left: 1px;
`;

export const BodyText = styled.div<{ sentiment: Sentiment }>`
  padding: 8px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  /* line-clamp: 1;
  -webkit-box-orient: vertical;  */
  display: flex;
  align-items: center;

  color: white;
  :not(:last-child) {
    border-bottom: 1px solid black;
  }

  :nth-last-child(2) {
    margin-bottom: 4px;
    border-bottom: 0;
  }

  cursor: pointer;

  :hover {
    color: ${(props) => {
      if (props.sentiment.toLowerCase() === "negative") {
        return "#ecd0d0";
      } else if (props.sentiment.toLowerCase() === "neutral") {
        return "#e2d6b7";
      } else if (props.sentiment.toLowerCase() === "positive") {
        return "#d0ecd0";
      }
    }};

    :not(:last-child) {
      border-bottom: 1px solid
        ${(props) => {
          if (props.sentiment.toLowerCase() === "negative") {
            return "#ecd0d0";
          } else if (props.sentiment.toLowerCase() === "neutral") {
            return "#e2d6b7";
          } else if (props.sentiment.toLowerCase() === "positive") {
            return "#d0ecd0";
          }
        }};
    }

    :nth-last-child(2) {
      border-bottom: 0;
    }
  }
`;

export const Dot = styled.div<{ sentiment: Sentiment }>`
  border-radius: 100%;
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  margin-right: 6px;
  background-color: ${(props) => {
    if (props.sentiment.toLowerCase() === "negative") {
      return "#F05827";
    } else if (props.sentiment.toLowerCase() === "neutral") {
      return "#FAB404";
    } else if (props.sentiment.toLowerCase() === "positive") {
      return "#4EB502";
    }
  }};
`;

export const LoadMore = styled.div<{ disable: boolean }>`
  color: black;
  cursor: pointer;
  padding: 16px;
  text-align: center;
  width: 50%;
  background-color: #d7d7d7;
  border-radius: 6px;
  margin: auto;

  :hover {
    background-color: #cfd8d4;
  }

  :active {
    background-color: #d7d7d7;
  }

  ${(props) =>
    props.disable &&
    css`
      color: grey;
      background-color: white;
      pointer-events: none;
    `}
`;
