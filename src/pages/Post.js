import { graphql } from "gatsby";
import React, { Component } from "react";

import BubbleDetail from "../components/BubbleDetail";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

class Post extends Component {
  render() {
    const { data } = this.props.data.post;
    const title = data.title.text;

    return (
      <Layout>
        <SEO
          title={`My blog | ${title}`}
          keywords={[`blog`, `gatsby`, `prismic`]}
        />
        <BubbleDetail title={title} body={data.body.html} />
      </Layout>
    );
  }
}

export default Post;

export const postQuery = graphql`
  query Post($slug: String) {
    post: prismicBubble(id: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
  }
`;
