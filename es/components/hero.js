var _templateObject = _taggedTemplateLiteralLoose(['\n  overflow: hidden;\n\n  ', '\n\n  ', '\n'], ['\n  overflow: hidden;\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    padding-top: 0;\n    width: 100vw;\n    height: 100vh;\n  '], ['\n    padding-top: 0;\n    width: 100vw;\n    height: 100vh;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    &:after {\n      background: #292929;\n      opacity: 0.4;\n      content: "";\n      width: 100%;\n      height: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n    }\n  '], ['\n    &:after {\n      background: #292929;\n      opacity: 0.4;\n      content: "";\n      width: 100%;\n      height: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-top: calc(100% * ', ');\n  filter: blur(30px);\n  transform: scale(1.1);\n\n  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }\n\n  ', '\n\n  ', '\n'], ['\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-top: calc(100% * ', ');\n  filter: blur(30px);\n  transform: scale(1.1);\n\n  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }\n\n  ', '\n\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    background: url(', ');\n    background-repeat: no-repeat;\n    background-size: contain;\n    image-rendering: -webkit-optimize-contrast;\n    animation: 0.5s linear forwards reveal;\n  '], ['\n    background: url(', ');\n    background-repeat: no-repeat;\n    background-size: contain;\n    image-rendering: -webkit-optimize-contrast;\n    animation: 0.5s linear forwards reveal;\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-size: contain;\n    image-rendering: -webkit-optimize-contrast;\n  '], ['\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-size: contain;\n    image-rendering: -webkit-optimize-contrast;\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import ImageLoader from 'react-load-image';
import styled, { css } from 'styled-components';

var HeroContainer = styled(ImageLoader)(_templateObject, function (props) {
  return props.fillPage && css(_templateObject2);
}, function (props) {
  return props.fillPage && props.overlay && css(_templateObject3);
});
var HeroImage = styled.div(_templateObject4, function (props) {
  return props.aspectRatio;
}, function (props) {
  return props.src && css(_templateObject5, function (props) {
    return props.src;
  });
}, function (props) {
  return props.thumbnail && css(_templateObject6, function (props) {
    return props.thumbnail;
  });
});

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Hero.prototype.render = function render() {
    return React.createElement(
      HeroContainer,
      { overlay: true, src: this.props.img, fillPage: this.props.fillPage },
      React.createElement(HeroImage, { aspectRatio: this.props.aspectRatio }),
      React.createElement('img', { src: this.props.img }),
      React.createElement(HeroImage, { aspectRatio: this.props.aspectRatio, thumbnail: this.props.thumbnail })
    );
  };

  return Hero;
}(React.Component);

export default Hero;