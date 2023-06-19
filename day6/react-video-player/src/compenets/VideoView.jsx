import { React } from 'react'


function VideoView(props) {
  // 비디오(useRef) 이름
  const videoLink = props.videoLink;
  const videoRef = props.videoRef;
  return (
    <>
    <video ref={videoRef} src={videoLink} ></video>
    </>

  )
}
export default VideoView;