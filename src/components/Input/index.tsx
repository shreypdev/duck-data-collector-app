import React from "react";
import "./Input.scss";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormControlProps,
  DatePicker,
  DatePickerProps,
  InputGroup,
} from "rsuite";

interface InputBoxProps extends FormControlProps {
  label?: string;
  message?: string;
  addonText?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  message,
  addonText,
  errorMessage,
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      {!addonText ? (
        <>
          <FormControl
            className={errorMessage ? "has-error" : ""}
            errorMessage={errorMessage}
            {...props}
          />
          <HelpBlock tooltip>{message}</HelpBlock>
        </>
      ) : (
        <span className="addon-input-container">
          <InputGroup>
            <FormControl errorMessage={errorMessage} {...props} />
            <InputGroup.Addon>{addonText}</InputGroup.Addon>
          </InputGroup>
          <HelpBlock tooltip>{message}</HelpBlock>
        </span>
      )}
    </FormGroup>
  );
};
{
  /* <FormGroup>
                <ControlLabel>How much food</ControlLabel>
                <InputGroup>
                  <FormControl name="foodQuantity" type='number'/>
                  <InputGroup.Addon>gm</InputGroup.Addon>
                </InputGroup>
              </FormGroup> */
}

interface DateInputProps extends DatePickerProps {
  label?: string;
  error?: string;
  message?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  error,
  message,
  value,
  onChange,
  ...props
}) => {
  return (
    <FormGroup className={error ? "has-error" : ""}>
      <ControlLabel>{label}</ControlLabel>
      <DatePicker format="HH:mm" value={value} onChange={onChange} />
      <HelpBlock tooltip>{message}</HelpBlock>
    </FormGroup>
  );
};
