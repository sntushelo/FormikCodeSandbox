import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqDeliveryNotes() {
  const {deliveryNotes, setDeliveryNotes, editTableLogic} = React.useContext(RfqContext);
  
  return (
    <MaterialTable
      title="Delivery Notes"
      columns={deliveryNotes.columns}
      data={deliveryNotes.data}
      editable={editTableLogic(deliveryNotes, setDeliveryNotes)}
    />
  );
}
