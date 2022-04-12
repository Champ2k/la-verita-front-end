import {
  Container,
  HeaderContainer,
  Header,
  BodyContainer,
  BodyText,
  Dot,
} from "./Table.style";

export type Sentiment = "negative" | "positive" | "neutral";

export type VaccineData = {
  comment: string;
  sentiment: Sentiment;
};

interface TableData {
  header?: string[];
  activeHeader?: number;
  data?: VaccineData[];
  onClick?: (e?: any, index?: number) => void;
  onSelectText?: (text: string) => void;
}

export const Table = (props: TableData) => {
  const { header, activeHeader, onClick, data, onSelectText } = props;

  return (
    <Container>
      <HeaderContainer>
        {header &&
          header.map((item, index) => (
            <Header
              isActive={Boolean(activeHeader === index)}
              key={`vaccine-${index + 1}`}
              onClick={(e: any) => onClick && onClick(e, index)}
            >
              {item}
            </Header>
          ))}
      </HeaderContainer>
      <BodyContainer>
        {data &&
          data.map((item, index) => (
            <BodyText
              onClick={() => onSelectText && onSelectText(item.comment)}
              sentiment={item.sentiment}
              key={`comment-text-${index + 1}`}
            >
              <Dot sentiment={item.sentiment} />
              {item.comment}
            </BodyText>
          ))}
      </BodyContainer>
    </Container>
  );
};
