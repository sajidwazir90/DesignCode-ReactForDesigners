import React from "react"
import styled from "styled-components"
import Wave from "./Wave"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  width: 100%;
  position: relative;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 55px;

  @media (max-width: 640px) {
    height: 820px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 auto;
  grid-gap: 100px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 0 40px;
  }
`
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
  max-width: 480px;
  margin: 10px 0;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const Section = props => {
  return (
    <SectionGroup image={props.image}>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <WaveTop>
        <Wave />
      </WaveTop>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section
