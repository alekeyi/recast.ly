import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleVideoListEntryTitleClicker = this.handleVideoListEntryTitleClicker.bind(this);
    this.state = {
      videos: {exampleVideoData},
      currentVideo: exampleVideoData[0],
      search: {searchYouTube}
    };
  }
  handleVideoListEntryTitleClicker(video){
    this.setState({
      currentVideo: video
    });
    console.log("Click");
  }
  handleSearchClick(searchClick) {
    this.setState({
      search: search.value
    });
  }

  render(props){
    return (
    // var App = () => (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>Search</em><Search searchClick={this.handleSearchClick}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>VideoPlayer</em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>VideoList</em><VideoList videos={exampleVideoData} click={this.handleVideoListEntryTitleClicker}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

// ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

export default App;

