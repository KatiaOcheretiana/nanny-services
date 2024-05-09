import { OptionTitle, Wrapper } from "./NannieFeatures.styled";

type NannieFeaturesPropsType = {
  title: string;
  text: string | number | string[];
  age?: boolean;
};

export const NannieFeatures = ({
  title,
  text,
  age,
}: NannieFeaturesPropsType) => {
  return (
    <Wrapper>
      <OptionTitle>
        {title}{" "}
        <span style={{ textDecoration: age ? "underline" : "none" }}>
          {text}
        </span>
      </OptionTitle>
    </Wrapper>
  );
};
