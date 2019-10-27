import React from "react";
import "../../styles.css";
import { useRoutes, A } from "hookrouter";
import routes from "../router";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

const LandingPage = () => {
  //const routeResult = useRoutes(routes);
  return (
    <div>
      <table>
        <tbody>
        <tr>
            <td/>
            <td/>
            <td/>
            <td/>
        </tr>
          <tr>
            <td>              
              <ListItem button>
                <A href="/addRfq">
                  <ListItemText primary="Add RFQ" />
                </A>
              </ListItem>
            </td>
            <td>
              <ListItem button>
                <A href="/rfqItems">
                  <ListItemText primary="RFQ Items" />
                </A>
              </ListItem>
            </td>
            <td>              
              <ListItem button>
                <A href="/rfqQuotes">
                  <ListItemText primary="Add RFQ Quotations" />
                </A>
              </ListItem>
            </td>
            <td>
              <ListItem button>
              <A href="/addPurchaseOrder">
                  <ListItemText primary="Add Purchase Order" />
                </A>
              </ListItem>
            </td>
            <td>
              <ListItem button>
                <A href="/addContact">
                  <ListItemText primary="Contacts Pager" />
                </A>
              </ListItem>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div>{routeResult}</div> */}
    </div>
  );
};

export default LandingPage;
