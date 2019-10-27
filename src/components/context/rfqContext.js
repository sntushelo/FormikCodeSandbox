import React from 'react';

export const RfqContext = React.createContext(
    {
        rfqs: [],
        rfqItems: [],
        quotes: [],
        purchaseOrders: [],
        deliveryNotes: [],
        invoices: [],
        contacts: []
    }
);