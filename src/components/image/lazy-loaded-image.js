const React = require('react')

class LazyLoadedImage extends React.Component {
  render () {
    const src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

    return (
      <img
        src={src}
        data-src={this.props.interpolatedSrc}
        data-widths={JSON.stringify(this.props.chefSizes)}
        data-sizes="auto"
        alt={this.props.alt}
        className="lazyload lazyautosizes"
      />
    )
  }
}

LazyLoadedImage.propTypes = {
  alt: React.PropTypes.string.isRequired,
  chefSizes: React.PropTypes.array.isRequired,
  interpolatedSrc: React.PropTypes.string.isRequired,
  sizes: React.PropTypes.string.isRequired
}

LazyLoadedImage.defaultProps = {
  alt: ''
}

module.exports = LazyLoadedImage
