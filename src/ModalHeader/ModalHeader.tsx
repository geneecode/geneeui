import clsx from 'clsx';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import Icon from '../Icon/Icon';

export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  onClose: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = function({ className, children, title, onClose, ...props }) {
  return (
    <section {...props} className={clsx('modal-header', className)}>
      {title && <div className="modal-title">{title}</div>}
      {children}
      <a className="close-icon" onClick={onClose}>
        <Icon>clear</Icon>
      </a>
    </section>
  );
};

export default ModalHeader;
