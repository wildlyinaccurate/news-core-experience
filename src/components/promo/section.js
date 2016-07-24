const React = require('react')

class PromoSection extends React.Component {
  render () {
    return (
      <a className="c-promo__section" href={this.props.url}>
        {this.props.name}
      </a>
    )
  }
}

PromoSection.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}

module.exports = PromoSection
