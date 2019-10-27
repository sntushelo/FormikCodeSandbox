import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqPurchaseOrders() {
  const {purchaseOrders, setPurchaseOrders, editTableLogic} = useContext(RfqContext);
  
  return (
    <MaterialTable
      title="Purchase Orders"
      columns={purchaseOrders.columns}
      data={purchaseOrders.data}
      editable={editTableLogic(purchaseOrders, setPurchaseOrders)}
    />
  );
}
