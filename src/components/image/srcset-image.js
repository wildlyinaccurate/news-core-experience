const React = require('react')

class SrcsetImage extends React.Component {
  getSrcSet (recipe, chefSizes, interpolate) {
    return chefSizes
      .map(size => `${interpolate(recipe, size)} ${size}w`)
      .join(', ')
  }

  render () {
    const srcset = this.getSrcSet(this.props.chefRecipe, this.props.chefSizes, this.props.interpolate)

    return (
      <img
        src={this.props.interpolatedSrc}
        sizes={this.props.sizes}
        srcSet={srcset}
        alt={this.props.alt}
      />
    )
  }
}

SrcsetImage.propTypes = {
  alt: React.PropTypes.string.isRequired,
  chefRecipe: React.PropTypes.string.isRequired,
  chefSizes: React.PropTypes.array.isRequired,
  interpolatedSrc: React.PropTypes.string.isRequired,
  sizes: React.PropTypes.string.isRequired
}

SrcsetImage.defaultProps = {
  alt: ''
}

module.exports = SrcsetImage
