import video from "../data/video.js";
import Views from "./Views"
import Votes from "./Votes"
import Comments from "./Comments.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <Views ViewsNumber={video.views} uploadDate={video.createdAt} />
      <Votes like={video.upvotes} dislike={video.downvotes} />
      <Comments props={video.comments} />
    </div>
  );
}

export default App;
