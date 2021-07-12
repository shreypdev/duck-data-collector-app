import React, { useState } from "react";
import "./ProvideData.scss";
import { useHistory } from "react-router";
import {
  Schema,
  Form,
  FormGroup,
  ButtonToolbar,
  Button,
  FlexboxGrid,
  Alert,
} from "rsuite";
import { DateInput, InputBox } from "../../components";

type Input = "food" | "place" | "count" | "foodKind" | "foodQuantity";

export const ProvideData: React.FC = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState<Record<Input, string>>({
    food: "",
    place: "",
    count: "",
    foodKind: "",
    foodQuantity: "",
  });
  const [date, setDate] = useState<Date>(new Date());

  const { NumberType, StringType } = Schema.Types;
  const model = Schema.Model({
    food: StringType().isRequired("This field is required."),
    place: StringType().isRequired("This field is required."),
    count: NumberType()
      .isInteger("Should have a decimal point.")
      .isRequired("This field is required."),
    foodKind: StringType().isRequired("This field is required."),
    foodQuantity: NumberType().isRequired("This field is required."),
  });

  const handleFormSubmit = (
    checkStatus: boolean,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    if (!checkStatus) {
      Alert.error(
        "Form cannot be submitted, please complete the requirements."
      );
      return;
    }
  };

  return (
    <div className="provide-data-container">
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <h2 className="title">Duck Information Form</h2>
          <div className="form-container">
            <Form
              onSubmit={handleFormSubmit}
              formValue={formValues}
              onChange={setFormValues}
              model={model}
            >
              <DateInput
                label="Time"
                value={date}
                onChange={setDate}
                message="Required"
                name="time"
              />
              <InputBox label="Food" name="food" message="Required" />
              <InputBox label="Place" name="place" message="Required" />
              <InputBox
                label="How many ducks"
                name="count"
                type="number"
                message="Required"
              />
              <InputBox
                label="What kind of food"
                name="foodKind"
                message="Required"
              />
              <InputBox
                label="How much food"
                name="foodQuantity"
                type="number"
                addonText="gm"
                message="Required"
              />
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="primary" type="submit">
                    Submit
                  </Button>
                  <Button appearance="default" onClick={history.goBack}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};
