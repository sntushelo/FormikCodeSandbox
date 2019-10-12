import React from "react";
import RfqItems from "./rfqItems";
import RfqForm from "./forms/rfqForm";
import ContactForm from "./forms/contactForm";
import PurchaseOrderForm from "./forms/purchaseOrderForm";

const routes = {
  "/items": () => <RfqItems />,
  "/addRfq": () => <RfqForm />,
  "/addPurchaseOrder": () => <PurchaseOrderForm />,
  "/addContact": () => <ContactForm />
};

export default routes;
