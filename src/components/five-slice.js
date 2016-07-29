const React = require('react')
const Promo = require('./promo')

class FiveSlice extends React.Component {
  render () {
    return (
      <div className="row c-slice">
        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[0]} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[1]} />
        </div>

        <div className="col-s-1 col-m-1/3 col-l-1/4">
          <Promo {...this.props.items[2]} />
        </div>

        <div className="col-l-1/4">
          <div className="row">
            <div className="col-s-1/2 col-l-1">
                <Promo {...this.props.items[3]} includeImage={false} includeTimestamp={false} includeSection={false} />
            </div>

            <div className="col-s-1/2 col-l-1">
                <Promo {...this.props.items[4]} includeImage={false} includeTimestamp={false} includeSection={false} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

FiveSlice.propTypes = {
  items: React.PropTypes.array.isRequired
}

module.exports = FiveSlice
