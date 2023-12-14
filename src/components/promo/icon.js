const React = require("react");
const PropTypes = require("prop-types");

const MEDIA_TYPE_AUDIO = "Audio";

class PromoIcon extends React.Component {
  getIcon() {
    switch (this.props.type) {
      case "PGL":
        return "📷 ";

      case "MAP":
        if (this.props.mediaType === MEDIA_TYPE_AUDIO) {
          return "🔊";
        }

        return "▶";
    }

    return null;
  }

  render() {
    const icon = this.getIcon();

    return icon ? (
      <span className="c-promo__icon">{this.getIcon()}</span>
    ) : null;
  }
}

PromoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
};

module.exports = PromoIcon;
