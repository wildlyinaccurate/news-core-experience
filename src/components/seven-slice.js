const React = require("react");
const PropTypes = require("prop-types");
const Promo = require("./promo");

class SevenSlice extends React.Component {
  render() {
    return (
      <div className="row c-slice">
        <div className="col-s-1 col-l-1/2">
          <Promo
            {...this.props.items[0]}
            includeSummary={true}
            delayedImage={false}
          />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[1]} includeSummary={true} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[2]} includeSummary={true} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[3]} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[4]} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[5]} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[6]} />
        </div>
      </div>
    );
  }
}

SevenSlice.propTypes = {
  items: PropTypes.array.isRequired,
};

module.exports = SevenSlice;
