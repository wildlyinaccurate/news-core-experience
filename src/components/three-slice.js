const React = require("react");
const PropTypes = require("prop-types");
const Promo = require("./promo");

class ThreeSlice extends React.Component {
  render() {
    return (
      <div className="row c-slice">
        <div className="col-s-1 col-m-1/3">
          <Promo {...this.props.items[0]} includeSummary={true} />
        </div>

        <div className="col-s-1 col-m-1/3">
          <Promo {...this.props.items[1]} includeSummary={true} />
        </div>

        <div className="col-s-1 col-m-1/3">
          <Promo {...this.props.items[2]} includeSummary={true} />
        </div>
      </div>
    );
  }
}

ThreeSlice.propTypes = {
  items: PropTypes.array.isRequired,
};

module.exports = ThreeSlice;
