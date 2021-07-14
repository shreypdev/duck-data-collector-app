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
  Icon,
} from "rsuite";
import { useState } from "react";

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
  type,
  ...props
}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <span className="addon-input-container">
        <InputGroup>
          <FormControl
            className={errorMessage ? "has-error" : ""}
            errorMessage={errorMessage}
            type={type === "password" && !isPasswordHidden ? "text" : type}
            {...props}
          />
          {addonText ? <InputGroup.Addon>{addonText}</InputGroup.Addon> : <></>}
          {type === "password" ? (
            <InputGroup.Button
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              <Icon icon={isPasswordHidden ? "eye" : "eye-slash"} />
            </InputGroup.Button>
          ) : (
            <></>
          )}
        </InputGroup>
        {message && <HelpBlock tooltip>{message}</HelpBlock>}
      </span>
    </FormGroup>
  );
};

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
