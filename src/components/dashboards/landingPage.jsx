import React from "react";
import "../../styles.css";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { A } from "hookrouter";

import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import {useStyles} from '../../shared/useStyles';

const LandingPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //const routeResult = useRoutes(routes);
  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <table>
          <tr>
            <td>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <A href="/rfqData">
                      <center><h1> RFQs <br/><br/></h1></center>
                    </A>
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <A href="/rfqQuotes">
                      <center><h1> QUOTATIONS<br/><br/> </h1></center>
                    </A>
                  </Paper>
                </Grid>
              </Grid>
            </td>
          </tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr>
            <td>
              <Grid container spacing={3}>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <A href="/rfqQuotes">
                      <center><h1> QUOTATIONS<br/><br/> </h1></center>
                    </A>
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12} md={4} lg={6}>
                  <Paper className={classes.paper}>
                    <A href="/rfqPurchaseOrders">
                      <center><h1> PURCHASE ORDERS </h1></center>
                    </A>
                  </Paper>
                </Grid>
              </Grid>
            </td>
          </tr>

        </table>
        </Container>
    </div>
  );
};

export default LandingPage;
