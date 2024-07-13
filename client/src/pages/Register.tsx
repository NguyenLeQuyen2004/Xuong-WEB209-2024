import { Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import instance from "src/apis";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";
import isEmail from "validator/lib/isEmail";

type RegisterFormParams = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string; // New field for confirm password
};

const Register = () => {
  const nav = useNavigate();

  const validate = (values: RegisterFormParams) => {
    const { username, email, password, confirmPassword } = values;
    const errors: ValidationErrors = {};
    if (!username) errors.username = "Please enter a username";
    if (!email) errors.email = "Please enter an email";
    if (email && !isEmail(email)) errors.email = "Invalid email format";
    if (!password) errors.password = "Please enter a password";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Please enter a password with at least ${MIN_PASSWORD} characters`;
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  const onSubmit = async (data: RegisterFormParams) => {
    try {
      await instance.post("/auth/register", data);
      nav("/login");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container>
      <Typography variant="h2" textAlign="center" mb={2}>
        Register
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ values }) => {
          return (
            <Stack gap={2}>
              <Field
                name="username"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label="Username"
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="email"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label="Email"
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label="Password"
                    messageError={meta.touched && meta.error}
                    type="password"
                  />
                )}
              />
              <Field
                name="confirmPassword"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label="Confirm Password"
                    messageError={meta.touched && meta.error}
                    type="password"
                  />
                )}
              />
              <Button variant="contained" onClick={() => onSubmit(values)}>
                Submit
              </Button>
            </Stack>
          );
        }}
      />
    </Container>
  );
};

export default Register;
