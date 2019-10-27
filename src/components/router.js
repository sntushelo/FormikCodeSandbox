import React from "react";

import RfqItems from "./rfqItems";
import RfqForm from "./forms/rfqForm";
import ContactForm from "./forms/contactForm";
import PurchaseOrderForm from "./forms/purchaseOrderForm";
import RfqPurchaseOrders from "./rfqPurchaseOrders";
import RfqQuotes from "./rfqQuotes";
import RfqDataGrid from "./rfqDataGrid";
import RfqDeliveryNotes from "./rfqDeliveryNotes";

const routes = {
  "/rfqItems": () => <RfqItems />,
  "/rfqData": () => <RfqDataGrid />,
  "/rfqQuotes": () => <RfqQuotes/>,
  "/addRfq": () => <RfqForm />,
  "/rfqPurchaseOrders": () => <RfqPurchaseOrders />,
  "/addPurchaseOrder": () => <PurchaseOrderForm />,
  "/rfqDeliveryNotes": () => <RfqDeliveryNotes />,
  "/addContact": () => <ContactForm />
};

export default routes;
