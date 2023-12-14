const React = require("react");
const PropTypes = require("prop-types");

class SrcsetImage extends React.Component {
  getSrcSet(recipe, chefSizes, interpolate) {
    return chefSizes
      .map((size) => `${interpolate(recipe, size)} ${size}w`)
      .join(", ");
  }

  render() {
    const srcset = this.getSrcSet(
      this.props.chefRecipe,
      this.props.chefSizes,
      this.props.interpolate
    );

    return (
      <img
        src={this.props.interpolatedSrc}
        sizes={this.props.sizes}
        srcSet={srcset}
        alt={this.props.alt}
      />
    );
  }
}

SrcsetImage.propTypes = {
  alt: PropTypes.string.isRequired,
  chefRecipe: PropTypes.string.isRequired,
  chefSizes: PropTypes.array.isRequired,
  interpolatedSrc: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
};

SrcsetImage.defaultProps = {
  alt: "",
};

module.exports = SrcsetImage;
