import YOUTUBE_API_KEY from "../config/youtube.js"

var searchYouTube = ({max = 5, query = ''}, callback) => {
  // TODO
  // GET {base_URL}/search?part=snippet
  //                    &q=YouTube+Data+API
  //                    &type=video
  //                    &videoCaption=closedCaption
  //                    &key={YOUTUBE_API_KEY}
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=YOUTUBE_API_KEY';

  $.get (url, {
    part: 'snippet',
    q: query,
    max: max,
    type: 'video',
    videoCaption: 'closedCaption',
    key: {YOUTUBE_API_KEY},
    videoEmbeddable: true,
    success: console.log("This was successful."),
    error: console.log("Fu")
  });
}

export default searchYouTube;

// GET 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=YOUTUBE_API_KEY' HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

