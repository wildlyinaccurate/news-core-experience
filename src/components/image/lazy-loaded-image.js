const React = require("react");
const PropTypes = require("prop-types");

class LazyLoadedImage extends React.Component {
  render() {
    const src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    return (
      <img
        src={src}
        data-src={this.props.interpolatedSrc}
        data-widths={JSON.stringify(this.props.chefSizes)}
        data-sizes="auto"
        alt={this.props.alt}
        className="lazyload lazyautosizes"
      />
    );
  }
}

LazyLoadedImage.propTypes = {
  alt: PropTypes.string.isRequired,
  chefSizes: PropTypes.array.isRequired,
  interpolatedSrc: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
};

LazyLoadedImage.defaultProps = {
  alt: "",
};

module.exports = LazyLoadedImage;
