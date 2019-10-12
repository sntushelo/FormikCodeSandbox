import React from "react";
import "../../styles.css";
import { useRoutes, A } from "hookrouter";
import routes from "../router";

const LandingPage = () => {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Add RFQ</h3>
            </td>
            <td>
              <h3>Add RFQ Items</h3>
            </td>
            <td>
              <h3>Add Purchase Order</h3>
            </td>
            <td>
              <h3>Contacts</h3>
            </td>
          </tr>
          <tr>
            <td>
              <A href="/addRfq">Add RFQ</A>
            </td>
            <td>
              <A href="/items">RFQ Items</A>
            </td>
            <td>
              <A href="/addPurchaseOrder">Add Purchase Order</A>
            </td>
            <td>
              <A href="/addContact">Contacts Page</A>
            </td>
          </tr>
        </tbody>
      </table>
      <div>{routeResult}</div>
    </div>
  );
};

export default LandingPage;
