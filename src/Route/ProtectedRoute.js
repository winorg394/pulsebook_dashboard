import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

function ProtectedRoute({ component: Component, ...restOfProps }) {


  return (
    <Route
      {...restOfProps}
      render={(props) =>
        <Layout>
          <Component {...props} />
        </Layout>

      }
    />
  );
}

export default ProtectedRoute;