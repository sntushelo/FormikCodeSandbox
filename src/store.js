import React, {useState, useContext} from 'react';
import {editTableLogic} from './shared/gridEdit';

export const RfqContext = React.createContext([]);

const Store = ({children}) => {
    const [rfqs, setRfqs] = useState({
        columns: [
            { title: 'Department', field: 'department' },
            { title: 'Date Received', field: 'dateReceived' },
            { title: 'Due Date', field: 'dueDate' },
            { title: 'Referene Number', field: 'refNum' },
            { title: 'Is High Priority', field: 'isHighPriority',
              lookup: { 1: 'Yes', 2: 'No' } },
            { title: 'Status', field: 'status',
              lookup: { 1: 'Received', 2: 'Delivered' }
            },
          ],
          data: [
            {
              department: 'Pubic Works',
              dateReceived: '01 Mar 2019',
              dueDate: '07 Mar 2019',
              refNum: 'PW-03-2019-001',
              isHighPriority: 1,
              status: 1
            },
            {
              department: 'Dept. Of Health',
              dateReceived: '01 Apr 2019',
              dueDate: '07 Apr 2019',
              refNum: 'DOH-04-2019-001',
              isHighPriority: 1,
              status: 1
            },
            {
              department: 'Prasa',
              dateReceived: '01 Jun 2019',
              dueDate: '07 Jun 2019',
              refNum: 'PRA-06-2019-001',
              isHighPriority: 1,
              status: 1
            },
          ]
    });
    const [rfqItems, setRfqItems] =  useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ],
          data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
              name: 'Zerya Betül',
              surname: 'Baran',
              birthYear: 2017,
              birthCity: 34,
            },
          ]
    });
    const [quotes, setQuotes] = useState({
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
          ]
    });
    const [purchaseOrders, setPurchaseOrders] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [deliveryNotes, setDeliveryNotes] = React.useState({
        columns: [
            { title: 'RFQ Ref', field: 'rfqRefNum' },
            { title: 'Purchase Order Ref', field: 'purchaseOrderRef' },
            { title: 'Item Description', field: 'item', type: 'numeric' },
            { title: 'Quantity', field: 'quantity' }
        ],
        data: [
          { rfqRefNum: 'R-00115', purchaseOrderRef: 'PO-445', item: 'Brake Discs', quantity: 15 },
          { rfqRefNum: 'R-00115', purchaseOrderRef: 'PO-445', item: 'Brake Pads', quantity: 60 },
          { rfqRefNum: 'R-00115', purchaseOrderRef: 'PO-887', item: 'Bumper lights', quantity: 20 },
        ]
  });
    return (
        <RfqContext.Provider value={{
            rfqs, setRfqs,
            rfqItems, setRfqItems,
            quotes, setQuotes,
            purchaseOrders, setPurchaseOrders,
            invoices, setInvoices,
            contacts, setContacts,
            deliveryNotes, setDeliveryNotes, editTableLogic}
            }>
            {children}
        </RfqContext.Provider>
    )
};

export default Store;