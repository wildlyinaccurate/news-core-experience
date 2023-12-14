const React = require("react");
const PropTypes = require("prop-types");
const PromoIcon = require("./icon");
const PromoImage = require("./image");
const PromoMetadata = require("./metadata");

class Promo extends React.Component {
  renderImage() {
    if (this.props.includeImage) {
      return (
        <PromoImage
          {...this.props.image}
          width={400}
          delayed={this.props.delayedImage}
        />
      );
    }

    return null;
  }

  renderSummary() {
    if (this.props.includeSummary) {
      return <p>{this.props.summary}</p>;
    }

    return null;
  }

  render() {
    return (
      <article className="c-promo">
        {this.renderImage()}

        <div className="c-promo__body">
          <div>
            <h3>
              <a href={this.props.url}>
                <PromoIcon type={this.props.type} />
                {this.props.title}
              </a>
            </h3>

            {this.renderSummary()}
          </div>

          <PromoMetadata {...this.props} />
        </div>
      </article>
    );
  }
}

Promo.propTypes = {
  image: PropTypes.object.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

  delayedImage: PropTypes.bool,
  promoClasses: PropTypes.string,

  includeImage: PropTypes.bool,
  includeSummary: PropTypes.bool,
  includeSection: PropTypes.bool,
  includeTimestamp: PropTypes.bool,
};

Promo.defaultProps = {
  delayedImage: true,
  includeImage: true,
  includeSummary: false,
  promoClasses: "",
};

module.exports = Promo;
