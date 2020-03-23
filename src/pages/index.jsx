import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import Details from "../components/Details/Details";
import Schedule from "../components/Schedule/Schedule";
import Requirements from "../components/Requirements/Requirements";
import config from "../../data/SiteConfig";

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={`${config.siteTitle}`} />
          <About />
          <Details />
          <Schedule />
          <Requirements />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
