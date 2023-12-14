const React = require("react");

class Header extends React.Component {
  render() {
    return (
      <header className="c-header">
        <div className="c-wrap">
          <div className="row">
            <div className="col-s-1 a-i-b">
              <h1 className="c-header__title">
                <a className="c-header__title-link" href="/news">
                  NEWS
                </a>
              </h1>

              <small className="c-header__byline">
                But like, really, really, small.
              </small>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Header;
