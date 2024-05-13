import styled from "styled-components";
import { globalColor } from "../../styles/root";
import { Field, Form } from "formik";

export const Container = styled.div`
  padding: 64px 36px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 44px;
  }

  @media (min-width: 1640px) {
    padding: 60px 64px;
    overflow-y: hidden;
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

export const ContactWrapper = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: auto;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 18px;
    column-gap: 5px;
  }
`;

export const ContactField = styled(FieldForm)`
  @media screen and (min-width: 1440px) {
    height: 52px;
  }
`;

export const Button = styled.button`
  margin-top: 32px;

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

export const NannieWrapper = styled.div`
  display: flex;
  gap: 14px;

  align-items: center;

  margin-bottom: 42px;

  > img {
    border-radius: 15px;
  }
`;

export const Position = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
  margin-bottom: 4px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${globalColor.textMain};
`;

export const Comment = styled.textarea`
  border: ${globalColor.borderLightGray};
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
  width: 100%;
  height: 116px;

  resize: none;

  ::placeholder {
    font-size: 16px;
    line-height: 125%;
    color: ${globalColor.textMain};
  }
`;
