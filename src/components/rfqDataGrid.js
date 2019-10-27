
import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqDataGrid() {
  const {rfq, setRfq, editTableLogic} = React.useContext(RfqContext);
  
  return (
    <MaterialTable
      title="RFQ Data"
      columns={rfq.columns}
      data={rfq.data}
      editable={editTableLogic(rfq, setRfq)}
    />
  );
}
