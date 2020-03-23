import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import config from "../../data/SiteConfig";

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={`Error | ${config.siteTitle}`} />
          <ErrorMessage />
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;
