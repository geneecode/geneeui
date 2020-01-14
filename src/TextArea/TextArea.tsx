import clsx from 'clsx';
import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import Icon from '../Icon';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  errormessage?: string;
  error?: boolean;
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function(
  { label, className, error, errormessage, ...props },
  ref,
) {
  return (
    <>
      <label>{label}</label>
      <textarea ref={ref} className={clsx(error ? 'form-input error-input' : 'form-input', className)} {...props} />
      {error ? (
        <div className="error-message">
          <Icon>error</Icon>
          <span>{errormessage}</span>
        </div>
      ) : null}
    </>
  );
});

export default TextArea;
