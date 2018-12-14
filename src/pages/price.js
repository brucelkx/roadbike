import React from "react"
import styled from "react-emotion"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import presets, { colors } from "../utils/presets"
import { rhythm, options } from "../utils/typography"
import { vP } from "../components/gutters"
import Container from "../components/container"
import MastheadBg from "../components/masthead-bg"
import MastheadContent from "../components/masthead"
import PriceCompareDetail from "../components/price/price-compare-detail"
import PriceQuestion from "../components/price/price-question"
import { PriceIcon} from "../assets/mobile-nav-icons"
import {
  setupScrollersObserver,
  unobserveScrollers,
} from "../utils/scrollers-observer"



class IndexRoute extends React.Component {
  componentDidMount() {
    setupScrollersObserver()
  }

  componentWillUnmount() {
    unobserveScrollers()
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta
            name="Description"
            content="小书匠付费功能介绍"
          />
        </Helmet>
        <div css={{ position: `relative` }}>
          <MastheadBg />
          <div
            css={{
              display: `flex`,
              flexDirection: `row`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
            }}
          >
            <MastheadContent />
            <div
              css={{
                padding: rhythm(presets.gutters.default / 2),
                paddingBottom: 0,
                flex: `0 0 100%`,
                maxWidth: `100%`,
                [presets.Hd]: { padding: vP, paddingTop: 0, paddingBottom: 0 },
              }}
            >
              <main
                id={`reach-skip-nav`}
                css={{
                  display: `flex`,
                  flexDirection: `row`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                }}
              >
              </main>
              <PriceCompareDetail />
              <PriceQuestion />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute


