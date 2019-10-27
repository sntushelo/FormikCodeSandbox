
import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqItems() {
  const {rfqItem, setRfqItem, editTableLogic} = React.useContext(RfqContext);
  
  return (
    <MaterialTable
      title="RFQ Items"
      columns={rfqItem.columns}
      data={rfqItem.data}
      editable={editTableLogic(rfqItem, setRfqItem)}
    />
  );
}
