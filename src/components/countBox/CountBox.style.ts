import styled, { keyframes } from "styled-components";

export const RotateAnimation = keyframes`
from {
    transform: rotateX(0deg);
}
to {
    transform: rotateX(-360deg);
}
`;

export const Container = styled.div<{ column?: number }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.column ? props.column : 1)},
    1fr
  );
  grid-column-gap: 24px;

  align-items: center;
`;

export const Box = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 64px 8px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  text-align: center;
  animation: ${RotateAnimation} 2s ease-out;
  transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
  perspective: 1000;
  transform-style: preserve-3d;

  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const Text = styled.div`
  color: black;
`;
