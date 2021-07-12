import React, { useState } from "react";
import "./ProvideData.scss";
import { useHistory } from "react-router";
import {
  Grid,
  Schema,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ButtonToolbar,
  Button,
  FlexboxGrid,
  DatePicker,
  InputGroup,
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

  const { ArrayType, StringType, NumberType } = Schema.Types;

  const handleFormSubmit = () => {
    console.log(formValues, date);
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
            >
              <DateInput
                label="Time"
                value={date}
                onChange={setDate}
                message="Required"
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
