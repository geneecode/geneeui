import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import Icon from '../Icon';


export interface InputProps
  extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
  > {
  label?: string;
  errormessage?: string;
  error?: boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function ({
  type = 'text',
  className,
  errormessage,
  error,
  label,
  ...props
}, ref) {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        className={clsx(error ? "form-input error-input" : "form-input", className)}
        type={type}
        ref={ref}
        {...props}
      />
      {error ?
        <div className="error-message">
          <Icon>error</Icon>
          <span>{errormessage}</span>
        </div>
        : null}

    </>
  );
});

export default Input;
