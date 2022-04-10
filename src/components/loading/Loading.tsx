import { LoadingWrapper, Dot } from "./Loading.style";

interface LoadingProps {}

export const Loading = (props: LoadingProps) => {
  const {} = props;
  return (
    <LoadingWrapper>
      <Dot color="green" delay="0s"/>
      <Dot color="red" delay="0.1s"/>
      <Dot color="blue" delay="0.2s"/>
    </LoadingWrapper>
  );
};
