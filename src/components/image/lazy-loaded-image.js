const React = require('react')

class LazyLoadedImage extends React.Component {
  render () {
    const src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    const classNames = ['qa-lazyload-image', 'lazyload', 'lazyautosizes']

    if (this.props.className) {
      classNames.push(this.props.className)
    }

    return (
      <img
        src={src}
        data-src={this.props.rawSrc}
        data-widths={JSON.stringify(this.props.chefSizes)}
        data-sizes="auto"
        alt={this.props.alt}
        className={classNames.join(' ')}
      />
    )
  }
}

LazyLoadedImage.propTypes = {
  alt: React.PropTypes.string.isRequired,
  chefSizes: React.PropTypes.array.isRequired,
  className: React.PropTypes.string.isRequired,
  delayed: React.PropTypes.bool.isRequired,
  sizes: React.PropTypes.string.isRequired,
  rawSrc: React.PropTypes.string.isRequired
}

LazyLoadedImage.defaultProps = {
  alt: ''
}

module.exports = LazyLoadedImage
