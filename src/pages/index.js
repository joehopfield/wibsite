import { graphql } from "gatsby";
import React from "react";

import Bubble from "../components/Bubble";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = props => (
  <Layout>
    <div className="page">
      <SEO title="Home" />
      {props.data.bubbles.edges.map(bubble => (
        <Bubble key={bubble.node.slugs[0]} slug={bubble.node.slugs[0]} data={bubble.node.data} />
      ))}
    </div>
  </Layout>
);

export default IndexPage;

export const IndexQuery = graphql`
  query Bubbles {
    bubbles: allPrismicBubble {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            body {
              text
            }
          }
        }
      }
    }
  }
`;
