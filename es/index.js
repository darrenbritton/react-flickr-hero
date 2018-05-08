var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import buildUrl from 'build-url';
import Hero from './components/hero';
import fetch from 'isomorphic-fetch';

/**
 * generates a hero image using the given flickr api key and details
 */
var FlickrHero = (_temp = _class = function (_Component) {
  _inherits(FlickrHero, _Component);

  function FlickrHero(props) {
    _classCallCheck(this, FlickrHero);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = { images: [] };
    return _this;
  }

  FlickrHero.prototype.componentWillMount = function componentWillMount() {
    this.queryFlickrApi(this.props);
  };

  FlickrHero.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.queryFlickrApi(nextProps);
  };

  FlickrHero.prototype.render = function render() {
    var image = this.state.images[Math.floor(Math.random() * this.state.images.length)];
    return React.createElement(Hero, _extends({
      img: image ? image.src : '',
      thumbnail: image ? image.thumbnail : '',
      aspectRatio: image ? image.aspectRatio : 0
    }, this.props));
  };

  return FlickrHero;
}(Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.generateApiUrl = function (props) {
    var extras = ["url_o", "url_m", "url_t"];
    return buildUrl('https://api.flickr.com', {
      path: 'services/rest/',
      queryParams: {
        method: props.album_id ? 'flickr.photosets.getPhotos' : props.user_id || props.searchTerm ? 'flickr.photos.search' : 'flickr.photos.getRecent',
        format: 'json',
        api_key: props.api_key || '',
        user_id: props.user_id || '',
        photoset_id: props.album_id || '',
        text: props.searchTerm || '',
        per_page: props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1),
        nojsoncallback: '?',
        extras: extras.join(',')
      }
    });
  };

  this.queryFlickrApi = function (props) {
    fetch(_this2.generateApiUrl(props)).then(function (response) {
      return response.json();
    }).then(function (data) {
      var photos = [];
      if (data.photoset) {
        photos = data.photoset.photo;
      } else if (data.photos) {
        photos = data.photos.photo;
      } else {
        throw data;
      }
      _this2.setState({
        images: photos.map(function (p) {
          return {
            src: p.url_o || p.url_m || 'https://s.yimg.com/pw/images/en-us/photo_unavailable.png',
            thumbnail: p.url_t,
            aspectRatio: Math.min(p.height_t, p.width_t) / Math.max(p.height_t, p.width_t)
          };
        })
      });
    }).catch(function (e) {
      return console.error(e);
    });
  };
}, _temp);


FlickrHero.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
  * api key for accessing flickr (see [here](https://www.flickr.com/services/api/misc.api_keys.html) for more details)
  */
  api_key: PropTypes.string.isRequired,
  /**
  * flickr user id of user to fetch photos from
  */
  user_id: PropTypes.string,
  /**
  * flickr album id to fetch photos from
  */
  album_id: PropTypes.string,
  /**
  * integer limit of photos to picked from
  */
  limit: PropTypes.number,
  /**
  * search term used to filter photos (searches using title, description and tags)
  */
  searchTerm: PropTypes.string,
  /**
  * sets container to fill page if passed
  */
  fillPage: PropTypes.bool,
  /**
  * class name to be applied to root div
  */
  className: PropTypes.string
} : {};

export default FlickrHero;