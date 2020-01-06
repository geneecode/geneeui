import React, { FC } from 'react';

export interface CellProps {
  height?: string;
  content?: string;
  header?: boolean;
  fixed?: boolean;
};

const Cell: FC<CellProps> = function ({ height, content, header, fixed }) {

  const fixedClass = fixed ? ' cell-fixed' : '';
  const headerClass = header ? ' cell-header' : '';
  const style = height ? { height: `${height}px` } : undefined;

  const className = (
    `cell${fixedClass}${headerClass}`
  );

  const cellMarkup = header ?
    // Add scope="col" to thead cells
    <th scope="col" className={className} style={style}>
      {content}
    </th>
    :
    fixed ?
      // Add scope="row" to the first cell of each tbody row
      <th scope="row" className={className} style={style}>
        {content}
      </th>
      :
      <td className={className} style={style}>
        {content}
      </td>;



  return (cellMarkup);

};

export default Cell;
