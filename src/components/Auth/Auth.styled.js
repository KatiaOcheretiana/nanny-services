import styled from "styled-components";
import { globalColor } from "../../styles/root";
import { Field, Form } from "formik";

export const Container = styled.div`
  padding: 44px 24px;

  @media screen and (min-width: 768px) {
    padding: 44px;
  }

  @media (min-width: 1440px) {
    padding: 64px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: ${globalColor.textMain};
  margin-bottom: 20px;
`;

export const TextDescription = styled.p`
  font-size: 16px;
  line-height: 125%;
  color: ${globalColor.textSecondary};
  margin-bottom: 40px;
`;

export const FormFiels = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FieldForm = styled(Field)`
  border: ${globalColor.borderLightGray};
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
  width: 100%;

  ::placeholder {
    font-size: 16px;
    line-height: 125%;
    color: ${globalColor.textMain};
  }
`;

export const Button = styled.button`
  margin-top: 40px;

  border-radius: 30px;
  border-color: transparent;
  padding: 16px;
  background-color: ${(props) => props.theme.second};

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.main};
    background-color: ${globalColor.lightWhite};
    border-color: ${(props) => props.theme.main};
  }

  transition: all 0.5s ease;
`;

export const Label = styled.label`
  position: relative;
`;

export const ErrorText = styled.div`
  position: absolute;
  color: ${(props) => props.theme.main};
  font-size: 12px;
  left: 6px;
`;

export const IconEye = styled.svg`
  stroke-width: 2px;
  stroke: #11101c;
  fill: transparent;

  position: absolute;

  top: 16px;
  right: 16px;
`;
