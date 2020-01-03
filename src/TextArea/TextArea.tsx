import React, { FC, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import Icon from '../Icon';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  errormessage?: string;
  error?: boolean;
  label?: string;
}

const TextArea: FC<TextAreaProps> = function ({ label, className, error, errormessage, ...props }) {
  return (
    <>
      <label>{label}</label>
      <textarea
        className={clsx(error ? "form-input error-input" : "form-input", className)}
        {...props} />
      {error ?
        <div className="error-message">
          <Icon>error</Icon>
          <span>{errormessage}</span>
        </div>
        : null}
    </>

  );
};

export default TextArea;
