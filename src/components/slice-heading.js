const React = require("react");
const PropTypes = require("prop-types");

class SliceHeading extends React.Component {
  render() {
    return (
      <h2 className="c-slice-heading">
        <a className="c-slice-heading__link" href={this.props.url}>
          {this.props.text}
        </a>
      </h2>
    );
  }
}

SliceHeading.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

module.exports = SliceHeading;
