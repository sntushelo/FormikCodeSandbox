
import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqDataGrid() {
  const {rfqs, setRfqs, editTableLogic} = React.useContext(RfqContext);
  
  return (
    <MaterialTable
      title="RFQ Data"
      columns={rfqs.columns}
      data={rfqs.data}
      editable={editTableLogic(rfqs, setRfqs)}
    />
  );
}
