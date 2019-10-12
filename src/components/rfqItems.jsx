import React from "react";
import "../styles.css";

const RfqItems = ({ values, errors, touched, isSubmitting }) => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h3>RFQ items Grid:</h3>
          </td>
          <td />
        </tr>
        <tr>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
        <tr>
          <td>Brake Pads 4 in a pack </td>
          <td>15</td>
          <td>3 550</td>
        </tr>
        <tr>
          <td>Oil 1 litre</td>
          <td>100</td>
          <td>350</td>
        </tr>
      </table>
    </div>
  );
};

export default RfqItems;
