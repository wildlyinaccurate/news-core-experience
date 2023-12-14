const url = require("url");
const React = require("react");
const PropTypes = require("prop-types");
const SrcsetImage = require("../image/srcset-image");
const LazyLoadedImage = require("../image/lazy-loaded-image");

const CHEF_SIZES = [240, 320, 480, 624, 800];

class PromoImage extends React.Component {
  transformImageSrc(src) {
    return (
      "https://ichef.bbci.co.uk/live-experience/cps/{width}/cpsprodpb" +
      url.parse(src).pathname
    );
  }

  interpolateImageWidth(src, width) {
    return src.replace(/{width}/g, width);
  }

  render() {
    const chefRecipe = this.transformImageSrc(this.props.href);

    const Image = this.props.delayed ? LazyLoadedImage : SrcsetImage;
    const imageClasses = ["c-img"];
    const imageProps = {
      alt: this.props.alt,
      chefSizes: CHEF_SIZES,
      interpolate: this.interpolateImageWidth,
      interpolatedSrc: this.interpolateImageWidth(chefRecipe, this.props.width),
      chefRecipe: chefRecipe,
      sizes: "(min-width: 230px) 100vw, 100vw",
    };

    if (this.props.delayed) {
      imageClasses.push("c-img--ll");
    }

    return (
      <div className={imageClasses.join(" ")}>
        <Image {...imageProps} />
      </div>
    );
  }
}

PromoImage.propTypes = {
  alt: PropTypes.string.isRequired,
  delayed: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

module.exports = PromoImage;
