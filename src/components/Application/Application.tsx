import { Formik } from "formik";
import {
  Button,
  Comment,
  ContactField,
  ContactWrapper,
  Container,
  ErrorText,
  FieldForm,
  FormFiels,
  Label,
  Name,
  NannieWrapper,
  Position,
  TextDescription,
  Title,
} from "./Application.styles";
import { applicationSchema } from "./applicationSchema";

type ApplicationPropsType = {
  onRequestClose: () => void;
  nannieImg: string;
  nannieName: string;
};

export const Application = ({
  onRequestClose,
  nannieName,
  nannieImg,
}: ApplicationPropsType) => {
  const handleSubmit = (data: any) => {
    console.log(data);
    onRequestClose();
  };

  return (
    <Container>
      <Title>Make an appointment with a babysitter</Title>
      <TextDescription>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </TextDescription>

      <NannieWrapper>
        <img src={nannieImg} alt={nannieName} width="44px" />
        <div>
          <Position>Your nanny</Position>
          <Name>{nannieName}</Name>
        </div>
      </NannieWrapper>
      <Formik
        initialValues={{
          address: "",
          phone: "",
          age: "",
          time: "",
          email: "",
          name: "",
          comment: "",
        }}
        validationSchema={applicationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <FormFiels>
            <ContactWrapper>
              <Label>
                <ContactField
                  name="address"
                  type="text"
                  autoComplete="off"
                  placeholder="Address"
                />
                {errors.address && touched.address && (
                  <ErrorText>{errors.address}</ErrorText>
                )}
              </Label>
              <Label>
                <ContactField
                  name="phone"
                  type="tel"
                  autoComplete="off"
                  placeholder="+380"
                />
                {errors.phone && touched.phone && (
                  <ErrorText>{errors.phone}</ErrorText>
                )}
              </Label>
              <Label>
                <ContactField
                  name="age"
                  type="number"
                  autoComplete="off"
                  placeholder="Child's age"
                />
                {errors.age && touched.age && (
                  <ErrorText>{errors.age}</ErrorText>
                )}
              </Label>
              <Label>
                <ContactField
                  name="time"
                  type="time"
                  min="08:00"
                  max="20:00"
                  autoComplete="off"
                  placeholder="00:00"
                />
                {errors.time && touched.time && (
                  <ErrorText>{errors.time}</ErrorText>
                )}
              </Label>
            </ContactWrapper>
            <Label>
              <FieldForm
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </Label>
            <Label>
              <FieldForm
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Father's or mother's name"
              />
              {errors.name && touched.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </Label>
            <Label>
              <Comment
                name="comment"
                autoComplete="off"
                placeholder="Comment"
              />{" "}
              {errors.comment && touched.comment && (
                <ErrorText>{errors.comment}</ErrorText>
              )}
            </Label>
            <Button type="submit">Send</Button>
          </FormFiels>
        )}
      </Formik>
    </Container>
  );
};
