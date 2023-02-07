import { ChangeEvent, useState } from 'react';
import { FormInputType } from '../types/types';

interface FormInputProps extends FormInputType {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

declare module 'react' {
  interface HTMLAttributes<T>
    extends AriaAttributes,
      DOMAttributes<T> {
    focused?: string;
  }
}

const FormInput = ({
  type,
  placeholder,
  errorMessage,
  onChange,
  ...inputProps
}: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setFocused(true);

  const tgShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      <div className="input-field">
        {/* <label>{label}</label> */}
        <input
          {...inputProps}
          type={
            type === 'password'
              ? !showPassword
                ? 'password'
                : 'text'
              : type
          }
          placeholder={placeholder}
          onChange={onChange}
          focused={focused.toString()}
          onBlur={handleFocus}
        />
        {type === 'password' ? (
          <i
            className="fa-regular fa-eye-slash show-password"
            onClick={() => tgShowPassword()}
          ></i>
        ) : null}
        <span className="error-message">{errorMessage}</span>
      </div>
    </>
  );
};
export default FormInput;
