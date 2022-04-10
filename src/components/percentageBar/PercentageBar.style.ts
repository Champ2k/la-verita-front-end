import styled from "styled-components";

export const Container = styled.div<{
  barHeight?: number;
  positive?: number;
  negative?: number;
  neutral?: number;
}>`
  position: relative;
  display: grid;
  grid-template-columns:
    minmax(
      min-content,
      ${(props) => (props.negative ? `${props.negative}%` : "1fr")}
    )
    minmax(
      min-content,
      ${(props) => (props.neutral ? `${props.neutral}%` : "1fr")}
    )
    minmax(
      min-content,
      ${(props) => (props.positive ? `${props.positive}%` : "1fr")}
    );
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const BarContainer = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor && props.bgColor};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
