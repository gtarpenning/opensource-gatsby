import * as React from "react"
// import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const Impact = () => (
    <Layout>
      <Parallax pages={3}>
        <div>
          <Divider speed={0.2} offset={0.1} factor={2.5}>
            <UpDown>
              <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
              <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
              <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
            </UpDown>
            <UpDownWide>
              <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
              <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
              <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
              <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
              <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
              <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
              <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
            </UpDownWide>
            <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
            <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
            <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
            <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
            <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
            <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
            <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
            <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
            <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
            <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
            <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
            <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
          </Divider>
          <Content sx={{ variant: `texts.bigger` }} speed={0.2} offset={0.2} factor={2}>
            <Inner>
              <Themed.h1>The Impact of Open Source</Themed.h1>
              <Themed.p syle={{backgroundColor: 'white'}}>
              <img alt='silly' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT2r2Sre8n6y2NLFqpDvr04fVD-v3hr0wJKEMa2wgZfvWX82q3Tldik6loyKEw5pAaXk&usqp=CAU' width="471" height="370" />
              </Themed.p>
              <Themed.p>
              - European Commission: “It is estimated that companies located in the EU invested around €1 billion in Open Source Software in 2018, which brought about a positive impact on the European economy of between €65 and €95 billion.”
              </Themed.p>
              <Themed.p>
              - Black Duck Software and North Bridge's survey that found 78% of companies run on Open-Source software (run part or all opps in OSS). (2015)
              </Themed.p>
              <Themed.p>
              - As part of that same study, they also found 64 percent of companies currently participate in open source projects              </Themed.p>
              <Themed.p>
              - From  Red Hat’s new 2020 State of Enterprise Open Source Report: 83 percent said that enterprise open source is instrumental to their organizations’ abilities to take advantage of cloud architectures.
              </Themed.p>
              <Themed.h3>
                RedHat
              </Themed.h3>
              <Themed.p>
              Mark Ewing was a technologist that, in the early 90’s would spin off his own versions of the up-and-coming OS Linux. He would sell CD with the software to small businesses, creating an alternative to Microsoft. Bob Young noticed the demand and chose to team up with Mark Ewing to incorporate Red Hat in 1995. Red Hat offered a “constantly evolving community developed operating system…”. 
              </Themed.p>
              <Themed.p>
              “Red Hat makes, maintains, and contributes to multiple free software projects, which shows its open-source spirit. It has bought many companies with proprietary software product codebases and released the software under open source licenses. As of March 2016, Red Hat is the second-largest corporate contributor to the Linux kernel version 4.14 after Intel.”
              </Themed.p>
              <Themed.p>
              RedHat is now a subsidiary of of IBM
              </Themed.p>
              <Themed.h3>
              Cloudera
              </Themed.h3>
              <Themed.p>
              Cloudera is another open-source company that was founded in 2008. However, it was part of the second generation of open-source companies. This new generation had two differences: software was principally developed in an existing company (Apache Hadoop within Yahoo) and only parts of the software were licenced off for free.              
              </Themed.p>
              <Themed.p>
              The founding of Cloudera changed the economic model of open-source business. Individual companies no longer had “moral authority” over the software, which allowed other competitors to offer more and more parts of their software for free.
              </Themed.p>
              <Themed.h4>
              “Cloudera is an enterprise software company that delivers a modern data management and analytics platform built on Apache Hadoop and the latest open source technologies.mbers here” -Ed Nair, Dataquest
              </Themed.h4>
              <Themed.p>
              Such changes would bring in a new generation of companies: SaaS
              </Themed.p>
            </Inner>
          </Content>
        </div>
      </Parallax>
    </Layout>
  )
  
  export default Impact