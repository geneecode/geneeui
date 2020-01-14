import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { getModalRoot } from '../configuration';
import { canUseDOM } from '../utils';

export type ModalSize =
  'sm' |
  'md' |
  'lg';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  size?: ModalSize;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function ({ open, children, size, className, ...props }, ref) {
  if (!open || !canUseDOM()) return null;

  return createPortal(
    <div className={open ? "modal show" : "modal"} ref={ref}>
      <div
        className={clsx(
          "modal-content",
          { [`modal-${size}`]: size },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div >,
    getModalRoot()
  );
});

export default Modal;
