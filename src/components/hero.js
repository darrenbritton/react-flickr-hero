import React from 'react'
import ImageLoader from 'react-load-image';
import styled, { css } from 'styled-components'

const HeroContainer = styled(ImageLoader)`
  overflow: hidden;

  ${props => props.fillPage && css`
    padding-top: 0;
    width: 100vw;
    height: 100vh;
  `}

  ${props => props.fillPage && props.overlay && css`
    &:after {
      background: #292929;
      opacity: 0.4;
      content: "";
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  `}
`
const HeroImage = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: calc(100% * ${props => props.aspectRatio});
  filter: blur(30px);
  transform: scale(1.1);

  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }

  ${props => props.src && css`
    background: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    image-rendering: -webkit-optimize-contrast;
    animation: 0.5s linear forwards reveal;
  `}

  ${props => props.thumbnail && css`
    background-image: url(${props => props.thumbnail});
    background-repeat: no-repeat;
    background-size: contain;
    image-rendering: -webkit-optimize-contrast;
  `}
`

class Hero extends React.Component {
  render() {
    return (
      <HeroContainer overlay src={this.props.img} fillPage={this.props.fillPage} >
        <HeroImage aspectRatio={this.props.aspectRatio} />
        <img src={this.props.img} />
        <HeroImage aspectRatio={this.props.aspectRatio} thumbnail={this.props.thumbnail} />
      </HeroContainer>
    );
  }
}

export default Hero
