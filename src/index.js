const React = require("react");
const PropTypes = require("prop-types");

const Header = require("./components/header");
const Utils = require("./components/utils");

const SliceHeading = require("./components/slice-heading");
const ThreeSlice = require("./components/three-slice");
const FiveSlice = require("./components/five-slice");
const SevenSlice = require("./components/seven-slice");
const GallerySlice = require("./components/gallery-slice");

class Index extends React.Component {
  render() {
    const groups = this.props.groups;

    return (
      <div>
        <Header />
        <Utils />

        <div className="c-wrap">
          <SevenSlice items={groups.topStories.slice(0, 7)} />
          <FiveSlice items={groups.topStories.slice(7)} />

          <SliceHeading text={"The Reporters"} url={"/news/the_reporters"} />
          <ThreeSlice items={groups.reporters} />

          <SliceHeading text={"Features"} />
          <ThreeSlice items={groups.features.slice(0, 3)} />
          <ThreeSlice items={groups.features.slice(3)} />

          <SliceHeading text={"Explainers"} url={"/news/explainers"} />
          <ThreeSlice items={groups.explainers} />

          <SliceHeading text={"Picture galleries"} />
          <GallerySlice items={groups.pictures} />
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  groups: PropTypes.object.isRequired,
};

module.exports = Index;
