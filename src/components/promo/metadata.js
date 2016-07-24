const React = require('react')
const PromoSection = require('./section')
const PromoTimestamp = require('./timestamp')

class PromoMetadata extends React.Component {
  renderSection () {
    if (this.props.includeSection) {
      return <PromoSection {...this.props.section} />
    }

    return null
  }

  renderTimestamp () {
    if (this.props.includeTimestamp) {
      return <PromoTimestamp time={this.props.lastUpdated} />
    }

    return null
  }

  render () {
    const parts = [
      this.renderTimestamp(),
      this.renderSection()
    ]

    if (parts.length) {
      return (
        <div className="c-promo__metadata">
          {
            parts.filter(x => x).map((part, key) =>
              <span key={key} className="c-promo__metadata-item">{part}</span>
            )
          }
        </div>
      )
    }

    return null
  }
}

PromoMetadata.propTypes = {
  lastUpdated: React.PropTypes.string.isRequired,
  section: React.PropTypes.object.isRequired,

  includeSection: React.PropTypes.bool.isRequired,
  includeTimestamp: React.PropTypes.bool.isRequired
}

PromoMetadata.defaultProps = {
  includeSection: true,
  includeTimestamp: true
}

module.exports = PromoMetadata
