const React = require('react')
const moment = require('moment')

class Timestamp extends React.Component {
  date () {
    return moment(this.props.time).format('D MMM YYYY')
  }

  render () {
    return (
      <span className="c-timestamp">
        🕓
        <time className="c-timestamp__time" dateTime={this.props.time}>
          {this.date()}
        </time>
      </span>
    )
  }
}

Timestamp.propTypes = {
  time: React.PropTypes.string.isRequired
}

module.exports = Timestamp
