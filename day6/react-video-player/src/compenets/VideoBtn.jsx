import React from 'react'

function VideoBtn(props) {
    const videoRef = props.videoRef;
    const playVid = () => {
        // 비디오 시작
        videoRef.current.play();
    }
    const pauseVid = () => {
        videoRef.current.pause();
    }
    const stopVid = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }

    return (
        <div className="btn-group">
            <button className="play" onClick={playVid}>시작</button>
            <button className="pause" onClick={pauseVid}>일시중지</button>
            <button className="stop" onClick={stopVid}>중지</button>
        </div>
    )
}
export default VideoBtn;
