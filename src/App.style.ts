import styled, { css } from "styled-components";

export const BodyContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 24px;
`;

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #000000;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  position: relative;
  height: 80%;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 171px;
  right: 0;
  left: 0;
  top: 0;
  z-index: -1;
  /* bottom: 200px;  */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(34, 154, 54, 1) 0%,
    rgba(8, 130, 125, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  min-height: 40px;
  align-items: center;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 8px;
  padding-right: 18%;
  border-radius: 8px;
  border: 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 1px rgb(0, 0, 0.3);
  font-size: 16px;
  resize: none;
  font-family: inherit;
  line-height: 150%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 2%;
`;

export const Button = styled.button<{ disable: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  background-color: #367cff;
  color: #ffffff;
  padding: 12px 16px;
  border: 0;

  ${(props) =>
    props.disable &&
    css`
      background-color: #cccccc;
      color: #666666;
      pointer-events: none;
    `}

  &:hover {
    background-color: #346cff;
    color: #f0ffff;
  }
`;
