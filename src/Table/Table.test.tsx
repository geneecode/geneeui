import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');

  const columnDefs = [
    {
      headerName: "First Name",
      field: "firstname",
      sortable: true,
      filter: true,
      checkboxSelection: true,
      editable: true,
      minWidth: 110
    },
    {
      headerName: "Last Name",
      field: "lastname",
      sortable: true,
      filter: true,
      minWidth: 110
    },
    {
      headerName: "Designation",
      field: "designation",
      sortable: true,
      filter: true,
      minWidth: 110
    },
    {
      headerName: "Company",
      field: "company",
      sortable: true,
      filter: true,
      minWidth: 110
    },
  ];

  function createData(firstname, lastname, designation, company) {
    return { firstname, lastname, designation, company };
  }

  const rowData = [
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.'),
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.'),
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.'),
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.'),
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.'),
    createData('John', 'Doe', 'Senior Software Engr.', 'FooBar Inc.')
  ];

  ReactDOM.render(<Table columnDefs={columnDefs} rowData={rowData} />,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
