import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

// Estilização do Input
const FieldStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  font-size: 18px;
  width: 90%;
`;

// Estilização do erro
const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
`

// Estilização do componente de input
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 100%;
`;
// Estilização do Label
const Label = styled.label`
  text-transform: capitalize;
`;
// Estilização do Label Obrigatorio
const RequiredLabel = styled.span`
  color: red;
`;

export const Input = ({ name, type = "", label, required, ...props }) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};
