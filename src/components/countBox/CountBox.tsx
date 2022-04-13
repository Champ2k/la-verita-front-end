import { Container, Box, Text } from "./CountBox.style";

export type overallSentimentData = {
  countNegative: number;
  countNeutral: number;
  countPositive: number;
  countTweet: number;
  hashtag: string;
};
export interface CountBoxProps {
  column?: number;
  data?: overallSentimentData;
  onClick?: (sentiment: string) => void;
}

export const CountBox = (props: CountBoxProps) => {
  const { column = 1, data, onClick } = props;
  return (
    <Container column={column}>
      {data &&
        Object.entries(data)
          .slice(0, column)
          .map((item, index) => (
            <Box
              key={`count-box-${index + 1}`}
              onClick={() => onClick && onClick(item[0].replace("count", ""))}
            >
              <Text>{item[0].replace("count", "")}</Text>
              <br />
              <Text>{item[1]}</Text>
            </Box>
          ))}
    </Container>
  );
};
