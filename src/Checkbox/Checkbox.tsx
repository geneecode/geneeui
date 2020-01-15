import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'disabled' | 'checked' | 'defaultChecked' | 'className'
  > {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function ({ label, ...props }, ref) {
  return (
    <div className="checkbox">
      <input ref={ref} type="checkbox" {...props} />
      <label>{label}</label>
    </div>
  );
});

export default Checkbox;
