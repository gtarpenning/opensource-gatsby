import React from "react";
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"


const Stallman = () => {
  const lines = [
    "Harvard Physics --> MIT Lab AI",
    "No cell phone, no Facebook/Twitter etc.",
    "Worked at AT&T, UNIX",
    "GNU Manifesto",
    "Linux, Emacs, etc. @ the Free Software Foundation (founded in 1985).",
    "Bell Labs Creation of GPL license, or “copyleft”",
    "Recent Controversy -- Epstein Comments",
    "Amazing website!",
  ]
  
  return (
  <Layout>
    <Parallax pages={3}>
      <div>
        <Divider speed={0.2} offset={0.1} factor={2}>
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
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0.33} factor={1}>
          <Inner>
            <Themed.h1>Richard Stallman <Link to="https://stallman.org/">[link]</Link></Themed.h1>
            <Themed.p>
              <img alt='stall' src='https://media.wired.com/photos/5d815ffe46103c0009de8d56/master/w_960,c_limit/science_stallman_473688628.jpg' />
            </Themed.p>
            <Themed.h2>Background</Themed.h2>
            {lines.map(x => (
              <Themed.p key={x}> 
                {x} 
              </Themed.p>
            ))
            }
            <Themed.h2>
              Official Stallman RSS Feed:
            </Themed.h2>
            </Inner>
          </Content>
          <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={1} factor={2} backgroundColor='gray'>
            <iframe height="1100" width="75%" frameBorder="0" scrolling="auto" title="lol"
                    style={{background: "lightgray", borderRadius: "25px", padding: "10px"}}
                    src="https://stallman.org/iframe-feed.html">If</iframe>
        </Content>
      </div>
    </Parallax>
  </Layout>
  )
}

export default Stallman;