import {
  Container,
  HeaderContainer,
  Header,
  BodyContainer,
  BodyText,
} from "./Table.style";

export type VaccineData = {

}

interface TableData {
  header?: string[];
  activeHeader?: number;
  data?: VaccineData[];
  onClick?: (e?:any, index?:number) => {};
}

export const Table = (props: TableData) => {
  const { header, activeHeader, onClick } = props;

  return (
    <Container>
      <HeaderContainer>
        {header && header.map((item, index) => (
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
          <BodyText>
              Sentence
          </BodyText>
          <BodyText>
              
          </BodyText>
      </BodyContainer>
    </Container>
  );
};
