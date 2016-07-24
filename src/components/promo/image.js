const url = require('url')
const React = require('react')
const SrcsetImage = require('../image/srcset-image')
const LazyLoadedImage = require('../image/lazy-loaded-image')

const ICHEF_SIZES = [240, 320, 480, 624, 800]

class PromoImage extends React.Component {
  transformImageSrc (src) {
    return 'https://ichef.bbci.co.uk/live-experience/cps/{width}/cpsprodpb' + url.parse(src).pathname
  }

  interpolateImageWidth (src, width) {
    return src.replace(/{width}/g, width)
  }

  render () {
    const ichefRecipe = this.transformImageSrc(this.props.href)

    const Image = this.props.delayed ? LazyLoadedImage : SrcsetImage
    const imageProps = {
      alt: this.props.alt,
      chefSizes: ICHEF_SIZES,
      className: 'img-fluid',
      interpolate: this.interpolateImageWidth,
      interpolatedSrc: this.interpolateImageWidth(ichefRecipe, this.props.width),
      rawSrc: ichefRecipe,
      sizes: '(min-width: 230px) 100vw, 100vw',
      src: ichefRecipe,
      width: this.props.width
    }

    return (
      <div className="responsive-image">
        <Image {...imageProps} />
      </div>
    )
  }
}

PromoImage.propTypes = {
  alt: React.PropTypes.string.isRequired,
  delayed: React.PropTypes.bool.isRequired,
  href: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired
}

module.exports = PromoImage
