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

// Why name query result (here "bubbles"), rather than using the default
// "allPrismicBubble"?
export const IndexQuery = graphql`
  query Bubbles {
    bubbles: allPrismicBubble {
      edges {
        node {
          id
          children {
            id
          }
          data {
            description {
              html
              text
            }
            title {
              text
            }
          }
          slugs
        }
      }
    }
  }
`;


{/*
export const IndexQuery = graphql`
{
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
*/}

{/* from graphiql
import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
export const query = graphql`
  {
    allPrismicBubble {
      edges {
        node {
          id
        }
      }
    }
  }
`
export default ComponentName
*/}

