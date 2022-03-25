import {
  Container,
  HeaderContainer,
  Header,
  BodyContainer,
  BodyText,
} from "./Table.style";

export type VaccineData = {
  comment?: string;
};

interface TableData {
  header?: string[];
  activeHeader?: number;
  data?: string[];
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
              onClick={() => onSelectText && onSelectText(item)}
              key={`comment-text-${index + 1}`}
            >
              {item}
            </BodyText>
          ))}
      </BodyContainer>
    </Container>
  );
};
