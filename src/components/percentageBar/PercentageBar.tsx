import { Container, BarContainer, Text } from "./PercentageBar.style";

export type BarObject = {
  size?: number;
  color?: string;
};

export interface PercentageBarData {
  positive?: BarObject;
  negative?: BarObject;
  neutral?: BarObject;
}

export const PercentageBar = (props: PercentageBarData) => {
  const { positive, negative, neutral } = props;

  return (
    <Container
      positive={positive?.size}
      negative={negative?.size}
      neutral={neutral?.size}
    >
      <BarContainer bgColor={negative?.color}>
        <Text>
          <div>Negative</div>
          <div>{negative?.size} %</div>
        </Text>
      </BarContainer>
      <BarContainer bgColor={neutral?.color}>
        <Text>
          <div>Neutral</div> <div>{neutral?.size} %</div>
        </Text>
      </BarContainer>
      <BarContainer bgColor={positive?.color}>
        <Text>
          <div>Positive</div> <div>{positive?.size} %</div>
        </Text>
      </BarContainer>
    </Container>
  );
};
