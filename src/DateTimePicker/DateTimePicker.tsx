import React, { FC } from 'react';
import Datetime, { DatetimepickerProps } from 'react-datetime';

export interface DateTimePickerProps extends DatetimepickerProps {
}

export const DateTimePicker: FC<DateTimePickerProps> = function ({ ...props }) {
  return (
    <div>
      <Datetime  {...props} />
    </div>
  );
};

export default DateTimePicker;
