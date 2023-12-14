const React = require("react");
const PropTypes = require("prop-types");

class PromoSection extends React.Component {
  render() {
    return (
      <a className="c-promo__section" href={this.props.url}>
        {this.props.name}
      </a>
    );
  }
}

PromoSection.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

module.exports = PromoSection;
