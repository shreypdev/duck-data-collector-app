import React, { useState } from "react";
import "./Signup.scss";
import { Grid, Row, Col, Button, Form, Alert, Schema } from "rsuite";
import SignupImg from "../../assets/signup.svg";
import { InputBox } from "../../components";
import { useDispatch } from "react-redux";
import Actions from "../../store/actions";

type Input = "name" | "email" | "password" | "confirmPassword";

export const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<Record<Input, string>>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    name: StringType().isRequired("This field is required."),
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
    confirmPassword: StringType()
      .addRule(
        (value, data) => value === data.password,
        "Should be same as password."
      )
      .isRequired("This field is required."),
  });

  const handleFormSubmit = async (
    checkStatus: boolean,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    if (!checkStatus) {
      Alert.error("Please enter all the required details.");
      return;
    }

    const { name, email, password } = formValues;

    dispatch(Actions.signup(name, email, password));
  };

  return (
    <Grid fluid className="signup-container">
      <Row>
        <Col xs={24} sm={24} md={14} lg={14} className="image-container">
          <img src={SignupImg} alt="welcome" />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} className="form-container">
          <div className="form-container">
            <Form
              onSubmit={handleFormSubmit}
              formValue={formValues}
              onChange={setFormValues}
              model={model}
            >
              <h2 className="title">Sign Up</h2>
              <InputBox label="Name" name="name" />
              <InputBox label="Email" name="email" type="email" />
              <InputBox label="Password" name="password" type="password" />
              <InputBox
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button appearance="primary" type="submit" block>
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
