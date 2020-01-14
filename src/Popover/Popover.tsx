import React, { FC } from 'react';
import { PopoverProps as ReactPopOverProps, ArrowContainer } from 'react-tiny-popover';
import MyPopOver from 'react-tiny-popover';

export interface PopoverProps extends ReactPopOverProps {
  content: JSX.Element;

}

export const Popover: FC<PopoverProps> = function ({ content, ...props }) {
  return (
    <div className="popover">
      <MyPopOver {...props}
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={'#2A324C'}
            arrowSize={10}
          >
            <div className="popover-content">
              {content}
            </div>
          </ArrowContainer>
        )}

      />
    </div>
  );
};

export default Popover;
