import React, {useContext} from 'react';
import MaterialTable from 'material-table';

import {RfqContext} from '../store';

export default function RfqQuotes() {
  const {quotes, setQuotes, editTableLogic} = React.useContext(RfqContext);
  
  return (
    <MaterialTable
      title="Quotations"
      columns={quotes.columns}
      data={quotes.data}
      editable={editTableLogic(quotes, setQuotes)}
    />
  );
}
