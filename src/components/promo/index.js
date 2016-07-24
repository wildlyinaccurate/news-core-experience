const React = require('react')
const PromoIcon = require('./icon')
const PromoImage = require('./image')
const PromoMetadata = require('./metadata')

class Promo extends React.Component {
  renderImage () {
    if (this.props.includeImage) {
      return <PromoImage {...this.props.image} delayed={this.props.delayedImage} />
    }

    return null
  }

  renderSummary () {
    if (this.props.includeSummary) {
      return <p>{this.props.summary}</p>
    }

    return null
  }

  render () {
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
    )
  }
}

Promo.propTypes = {
  image: React.PropTypes.object.isRequired,
  lastUpdated: React.PropTypes.string.isRequired,
  section: React.PropTypes.object.isRequired,
  summary: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,

  delayedImage: React.PropTypes.bool,
  promoClasses: React.PropTypes.string,

  includeImage: React.PropTypes.bool,
  includeSummary: React.PropTypes.bool,
  includeSection: React.PropTypes.bool,
  includeTimestamp: React.PropTypes.bool
}

Promo.defaultProps = {
  delayedImage: true,
  includeImage: true,
  includeSummary: false,
  promoClasses: ''
}

module.exports = Promo
