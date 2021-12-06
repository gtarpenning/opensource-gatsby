import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const PubPriv = () => {
  const lines1 = [
    "Corporate profits incentivise growth",
    "Almost limitless investment, when there exists a high likelihood of big return",
    "Structure / Legal Teams / Company Infrastructure / Connections",
  ]

  const lines2 = [
    "Not beholden to any formal leadership",
    "Communities = more voices heard",
    "Creativity / Risk-Free Exploration",
    "Disorganized?",
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
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0.4} factor={2}>
          <Inner>
            <Themed.h1>Public Vs. Private Development</Themed.h1>
            <Themed.h3>Public Development</Themed.h3>
            <Themed.p>
                <img alt='amaz' src='https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg' />
            </Themed.p>
            {lines1.map(x => (
              <Themed.p key={x}> 
                {x} 
              </Themed.p>
            ))
            }
            <Themed.p>
                <img alt='appl' src='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Apple-Event-September-2021.jpg?quality=82&strip=all' width='1000px' height='562px'/>
            </Themed.p>
            <Themed.h3>Private Development</Themed.h3>
            {lines2.map(x => (
              <Themed.p key={x}> 
                {x} 
              </Themed.p>
            ))
            }
            <Themed.p>
                <img alt='apach' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6P4tY4W5TqCClRhMWuLJWJ8upvRGPAqc86k9ctuwPZ7GfEZFYWgJP1_lUaOhdKa8VtY&usqp=CAU' width='600' height='338'/>
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
  )
}

export default PubPriv