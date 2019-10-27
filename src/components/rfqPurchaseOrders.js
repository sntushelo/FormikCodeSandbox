import React from 'react';
import MaterialTable from 'material-table';

export default function RfqPurchaseOrders() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'RFQ Ref', field: 'rfqRefNum' },
      { title: 'Item', field: 'item' },
      { title: 'Quantity', field: 'quantity' },
      { title: 'Supplier', field: 'supplier' },
      { title: 'Price', field: 'price', type: 'numeric' },
      {
        title: 'Supplier',
        field: 'supplier',
        lookup: { 34: 'ABC Supplies', 63: 'A to Z Factory' },
      },
    ],
    data: [
      { rfqRefNum: 'R-00115', item: 'Brake Discs', price:1300, quantity: 15, supplier: 63 },
      { rfqRefNum: 'R-00115', item: 'Brake Pads', price:255, quantity: 60, supplier: 63 },
      { rfqRefNum: 'R-00115', item: 'Bumper lights', price:95, quantity: 20, supplier: 34 },
    ],
  });

  return (
    <MaterialTable
      title="Purchase Orders"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
