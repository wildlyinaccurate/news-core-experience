const React = require('react')

class Utils extends React.Component {
  render () {
    return (
      <div className="c-utils">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1">
              <p>It looks like you're on a mobile connection, so we've given you a more basic experience. You can enhance your experience using the controls below.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-1">
              <button className="c-utils__button" id="load-images">Load all images</button>
              <button className="c-utils__button" id="download-top">Download top stories for offline reading</button>
              <button className="c-utils__button" id="download-all">Download all stories for offline reading</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Utils
