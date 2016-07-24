const React = require('react')
const Promo = require('./promo')

class GallerySlice extends React.Component {
  render () {
    return (
      <div className="row c-slice">
        <div className="col-xs-1 col-md-3/5">
          <Promo {...this.props.items[0]} includeSummary={true} includeTimestamp={false} includeSection={false} />
        </div>

        <div className="col-xs-1 col-md-2/5">
          <div className="row">
            <div className="col-xs-1 col-md-1/2">
              <Promo {...this.props.items[1]} includeSummary={true} includeTimestamp={false} includeSection={false} />
            </div>

            <div className="col-xs-1 col-md-1/2">
              <Promo {...this.props.items[2]} includeSummary={true} includeTimestamp={false} includeSection={false} />
            </div>

            <div className="col-xs-1 col-md-1/2">
                <Promo {...this.props.items[3]} includeSummary={true} includeTimestamp={false} includeSection={false} />
            </div>

            <div className="col-xs-1 col-md-1/2">
                <Promo {...this.props.items[4]} includeSummary={true} includeTimestamp={false} includeSection={false} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GallerySlice.propTypes = {
  items: React.PropTypes.array.isRequired
}

module.exports = GallerySlice
