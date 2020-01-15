import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface RadioButtonProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'checked' | 'defaultChecked' | 'value' | 'name' | 'className'
  > {
  disabled?: boolean;
  value?: string;
  label?: string;
  onClick?: (val: string) => void;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function(
  { disabled, value, label, onClick, ...props },
  ref,
) {
  return (
    <div className={clsx('radio', disabled && 'disabled')} onClick={() => onClick(value)}>
      <input {...props} ref={ref} value={value} onChange={() => onClick(value)} type="radio" disabled={disabled} />
      <label>{label}</label>
    </div>
  );
});

export default RadioButton;
