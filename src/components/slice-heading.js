const React = require('react')

class SliceHeading extends React.Component {

  render () {
    return (
      <h2 className="c-slice-heading">
        <a className="c-slice-heading__link" href={this.props.url}>{this.props.text}</a>
      </h2>
    )
  }
}

SliceHeading.propTypes = {
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string
}

module.exports = SliceHeading
