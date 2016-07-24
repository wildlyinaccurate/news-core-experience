const React = require('react')

class SrcsetImage extends React.Component {
  getSrcSet (src, chefSizes, interpolate) {
    return chefSizes
      .map(size => `${interpolate(src, size)} ${size}w`)
      .join(', ')
  }

  render () {
    const srcset = this.getSrcSet(this.props.rawSrc, this.props.chefSizes, this.props.interpolate)

    return (
      <img
        src={this.props.interpolatedSrc}
        sizes={this.props.sizes}
        srcSet={srcset}
        alt={this.props.alt}
        className="qa-srcset-image"
      />
    )
  }
}

SrcsetImage.propTypes = {
  alt: React.PropTypes.string.isRequired,
  chefSizes: React.PropTypes.array.isRequired,
  delayed: React.PropTypes.bool.isRequired,
  sizes: React.PropTypes.string.isRequired,
  rawSrc: React.PropTypes.string.isRequired
}

SrcsetImage.defaultProps = {
  alt: ''
}

module.exports = SrcsetImage
