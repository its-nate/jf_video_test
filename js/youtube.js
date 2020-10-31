const videos = [
  {
    id: "player1",
    videoID: "i3ccPrFqP4Y",
  },
  {
    id: "player2",
    videoID: "Qp02k82WAXc",
  },
  {
    id: "player3",
    videoID: "M2jqkyB4F34",
  },
  {
    id: "player4",
    videoID: "8BWyiiiy2Ng",
  },
  {
    id: "player5",
    videoID: "4EVhiSTvE5A",
  },
];

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    width: "560",
    height: "400",
    videoId: playerInfo.videoID,
    playerVars: { controls: 1, disablekb: 1 },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onYouTubeIframeAPIReady() {
  if (typeof videos === "undefined") return;

  for (let i = 0; i < videos.length; i++) {
    let curPlayer = createPlayer(videos[i]);
    let el = document.getElementById(videos[i].videoID);
    el.style.display = "none";
    let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "block";
  }
}

// when video ends
function onPlayerStateChange(event) {
    console.log(event);
  let video_id = event.target.playerInfo.videoData.video_id;
  if (event.data === 0) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].videoID === video_id) {
        let el = document.getElementById(video_id);
        el.style.display = "block";
      }
    }
  }
}
