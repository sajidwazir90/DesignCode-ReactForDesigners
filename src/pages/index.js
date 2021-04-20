import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import styled from "styled-components"
import Cell from "../components/Cell"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero-group">
        <h1>Learn to design and code React apps</h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with Reacts and Swift
        </p>
        <a href="">Watch the Video</a>
        <div className="logos">
          <img src={require("../images/logo-sketch.png").default} width="50" />
          <img src={require("../images/logo-figma.png").default} width="50" />
          <img src={require("../images/logo-studio.png").default} width="50" />
          <img src={require("../images/logo-framer.png").default} width="50" />
          <img src={require("../images/logo-react.png").default} width="50" />
          <img src={require("../images/logo-swift.png").default} width="50" />
        </div>
      </div>
      <Wave />
    </div>
    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="card-group">
        <Card
          background={require("../images/wallpaper.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
        <Card
          background={require("../images/wallpaper2.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
        <Card
          background={require("../images/wallpaper3.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
        <Card
          background={require("../images/wallpaper4.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
        <Card
          background={require("../images/wallpaper2.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
        <Card
          background={require("../images/wallpaper3.jpg").default}
          title="React for Designers"
          desc="12 sections"
        />
      </div>
    </div>

    <Section
      image={require("../images/wallpaper2.jpg").default}
      logo={require("../images/logo-react.png").default}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell image={cell.image} title={cell.title} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
