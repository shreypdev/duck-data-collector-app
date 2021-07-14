import React, { useState } from "react";
import "./Login.scss";
import { Grid, Row, Col, Button, Form, Alert, Schema } from "rsuite";
import LoginImg from "../../assets/login.svg";
import { InputBox } from "../../components";
import Actions from "../../store/actions";
import { useDispatch } from "react-redux";

type Input = "email" | "password";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<Record<Input, string>>({
    email: "",
    password: "",
  });

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    email: StringType().isRequired("This field is required."),
    password: StringType()
      .minLength(8, "Minimum length should be 8 characters.")
      .containsUppercaseLetter("Should contain at least 1 uppercase letter.")
      .containsNumber("Should contain at least 1 number.")
      .addRule(
        (value) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value),
        "Should contain at least 1 special character."
      )
      .isRequired("This field is required."),
  });

  const handleFormSubmit = (
    checkStatus: boolean,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    if (!checkStatus) {
      Alert.error("Please enter all the required details.");
      return;
    }

    const { email, password } = formValues;

    dispatch(Actions.login(email, password));
  };

  return (
    <Grid fluid className="login-container">
      <Row>
        <Col xs={24} sm={24} md={14} lg={14} className="image-container">
          <img src={LoginImg} alt="auth" />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} className="form-container">
          <div className="form-container">
            <Form
              onSubmit={handleFormSubmit}
              formValue={formValues}
              onChange={setFormValues}
              model={model}
            >
              <h2 className="title">Login</h2>
              <InputBox label="Email" name="email" type="email" />
              <InputBox label="Password" name="password" type="password" />
              <Button appearance="primary" type="submit" block>
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
