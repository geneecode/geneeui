import React, { FC } from 'react';
import { ChromePicker, ChromePickerProps } from 'react-color';

export interface ColorPickerProps extends ChromePickerProps {

}

const ColorPicker: FC<ColorPickerProps> = function ({ ...props }) {
  return <ChromePicker {...props} />;
};

export default ColorPicker;
