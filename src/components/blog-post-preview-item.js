import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "react-emotion"

import typography, { rhythm, scale, options } from "../utils/typography"
import presets, { colors } from "../utils/presets"
import getLink from "../utils/node-link"


const ArticleStyled = styled('article')`
  display: flex;
  flex-direction: column;
  ${presets.Tablet} {
    flex-direction: row;
  }
`

const CoverStyled = styled(Img)`
  display: none;
  ${presets.Tablet} {
    flex-basis: 180px;
    flex-grow: 0;
    display: block;
  }
`

const ContentStyled = styled(`div`)`
  flex-basis: 100%;
  flex-grow: 0;
  white-space: normal;
  word-break: break-word;
  ${presets.Tablet} {
    flex-basis: calc(100% - 180px);
    padding: ${rhythm(options.blockMarginBottom * 2)};
    padding-left: ${rhythm(options.blockMarginBottom * 3)};
    padding-right: ${rhythm(options.blockMarginBottom * 3)};
    margin-left: ${rhythm(-options.blockMarginBottom * 2)};
    margin-right: ${rhythm(-options.blockMarginBottom * 2)};
  }
`

const BlogPostPreviewItem = ({ post, className }) => {
  return (
    <article className={className} css={{ position: `relative` }}>
      <ArticleStyled>
        <CoverStyled fluid={post.cover.childImageSharp.fluid} />
      <ContentStyled>
      <Link to={getLink(post)}>
        <h2>{post.title}</h2>
        <p css={{ fontWeight: `normal` }}>
          {post.excerpt}
        </p>
      </Link>
      <div
        css={{
          display: `flex`,
          alignItems: `center`,
          marginBottom: rhythm(2),
        }}
      >
        <div
          css={{
            display: `inline-block`,
            fontFamily: typography.options.headerFontFamily.join(`,`),
            color: colors.gray.calm,
            ...scale(-2 / 5),
            [presets.Mobile]: {
              ...scale(-1 / 5),
            },
            [presets.Desktop]: {
              ...scale(0),
            },
          }}
        >
          <div>
            {` `}
            on
            {` `}
            {post.updateDate}
          </div>
        </div>
      </div>
      <Link
        to={getLink(post)}
        css={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: `hidden`,
          textIndent: `-100%`,
          whiteSpace: `nowrap`,
          zIndex: 0,
          "&&": {
            border: 0,
            boxShadow: `none`,
            "&:hover": {
              background: `none`,
            },
          },
        }}
      >
        Read more
      </Link>
    </ContentStyled>
    </ArticleStyled>
    </article>
  )
}

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on StoryWriterMarkdown {
    slug
    title
    docType
    excerpt
    tags
    updateDate(formatString: "DD MMMM, YYYY")
    cover {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meta {
      title
      tags
    }
  }
`

export default BlogPostPreviewItem
