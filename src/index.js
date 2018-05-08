import React, {Component} from 'react'
import PropTypes from 'prop-types'
import buildUrl from 'build-url'
import Hero from './components/hero'
import fetch from 'isomorphic-fetch'

/**
 * generates a hero image using the given flickr api key and details
 */
class FlickrHero extends Component {
  constructor(props) {
    super(props);

    this.state = { images: []};
  }

  componentWillMount() {
    this.queryFlickrApi(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.queryFlickrApi(nextProps)
  }

  generateApiUrl = (props) => {
    const extras = ["url_o", "url_m", "url_t"];
    return buildUrl('https://api.flickr.com', {
      path: 'services/rest/',
      queryParams: {
        method:  props.album_id ? 'flickr.photosets.getPhotos' : (props.user_id || props.searchTerm) ? 'flickr.photos.search' : 'flickr.photos.getRecent' ,
        format: 'json',
        api_key: props.api_key || '',
        user_id: props.user_id || '',
        photoset_id: props.album_id || '',
        text: props.searchTerm || '',
        per_page: props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1),
        nojsoncallback: '?',
        extras: extras.join(',')
      }
    })
  }

  queryFlickrApi = (props) => {
    fetch(this.generateApiUrl(props))
      .then(response => response.json())
      .then(data => {
        let photos = [];
        if (data.photoset) {
          photos = data.photoset.photo
        }
        else if (data.photos) {
          photos = data.photos.photo
        } else {
          throw(data);
        }
        this.setState({
          images:photos.map((p) =>
            {
              return {
                src: p.url_o || p.url_m || 'https://s.yimg.com/pw/images/en-us/photo_unavailable.png',
                thumbnail: p.url_t,
                aspectRatio: Math.min(p.height_t, p.width_t) / Math.max(p.height_t, p.width_t)
              }
            })
        })
      })
      .catch(e => console.error(e))
  }

  render() {
    const image = this.state.images[Math.floor(Math.random()*this.state.images.length)];
    return (
      <Hero
        img={image ? image.src : ''}
        thumbnail={image ? image.thumbnail : ''}
        aspectRatio ={image ? image.aspectRatio : 0}
        {...this.props}
      />
    )
  }
}

FlickrHero.propTypes = {
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
}

export default FlickrHero
