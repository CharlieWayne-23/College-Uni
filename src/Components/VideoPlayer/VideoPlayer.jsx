import React, { useRef } from 'react' 
import './VideoPlayer.css'
import video_clip from '../../assets/college-clip.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

// Logic for the onclick on back drop to exit the video display
// Rmb we wanna access the dom element and do something with it that will on render ones when the page is load
const player = useRef(null);

const closeVidPlayer =(e) => {
  if(e.target === player.current){
    setPlayState(false);
  }
}

  return (
    // logic to play the video on click of the playicon
<div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closeVidPlayer}>
   <video src={video_clip} autoPlay muted controls>
    
   </video>
</div>
  )
}

export default VideoPlayer