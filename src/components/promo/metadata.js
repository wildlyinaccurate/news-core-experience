const React = require("react");
const PropTypes = require("prop-types");
const PromoSection = require("./section");
const PromoTimestamp = require("./timestamp");

class PromoMetadata extends React.Component {
  renderSection() {
    if (this.props.includeSection) {
      return <PromoSection {...this.props.section} />;
    }

    return null;
  }

  renderTimestamp() {
    if (this.props.includeTimestamp) {
      return <PromoTimestamp time={this.props.lastUpdated} />;
    }

    return null;
  }

  render() {
    const parts = [this.renderTimestamp(), this.renderSection()];

    if (parts.length) {
      return (
        <div className="c-promo__metadata">
          {parts
            .filter((x) => x)
            .map((part, key) => (
              <span key={key} className="c-promo__metadata-item">
                {part}
              </span>
            ))}
        </div>
      );
    }

    return null;
  }
}

PromoMetadata.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,

  includeSection: PropTypes.bool.isRequired,
  includeTimestamp: PropTypes.bool.isRequired,
};

PromoMetadata.defaultProps = {
  includeSection: true,
  includeTimestamp: true,
};

module.exports = PromoMetadata;
