import React, { ComponentProps, FC } from 'react';
import ReactSelect from 'react-select';
import clsx from 'clsx';
import Icon from '../Icon';

//FIXME: Find a way to omit props while maintaining typing
export interface SelectProps extends ComponentProps<typeof ReactSelect> {
  label?: string;
  errormessage?: string;
  error?: boolean;
}

export const Select: FC<SelectProps> = function({ label, error, className, errormessage, ...props }) {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <ReactSelect
        {...props}
        classNamePrefix="custom-select"
        className={clsx('custom-select', className, error ? 'error-input' : '')}
      />
      {error ? (
        <div className="error-message">
          <Icon>error</Icon>
          <span>{errormessage}</span>
        </div>
      ) : null}
    </>
  );
};

export default Select;
