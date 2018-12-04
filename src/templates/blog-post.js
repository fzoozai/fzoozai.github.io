import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Background from '../blog-bg.jpg'
import SimpleSlider from '../components/SimpleSlider'

class BlogPost extends Component {
  render() {
    const { title, content, body } = this.props.data.contentfulBlog
    return (
      <div className="container" >
        <SimpleSlider />
        <h1 style={{fontFamily: 'Advent Pro'}}>{title}</h1>
        <p>{body.body}</p>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content
      body {
        body
      }
    }
  }
`
