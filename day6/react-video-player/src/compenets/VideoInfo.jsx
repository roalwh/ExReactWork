import { useState, useEffect } from 'react'

function VideoInfo(props) {

    const videoRef = props.videoRef;

    const [duration, setDuration] = useState(0);//영상길이
    const [currentTime, setCurrentTime] = useState(0);// 현재시간

    useEffect(() => {
        // 동영상 시작전 영상 전체길이 로드
        videoRef.current.addEventListener('loadedmetadata', () => { setDuration(videoRef.current.duration); });

        setCurrentTime(videoRef.current.currentTime);

        let videoInterval = setInterval(() => {
            setCurrentTime(videoRef.current.currentTime);

        }, 1000);

        // 인터벌 clean
        return () => clearInterval(videoInterval);
    }, [currentTime])

    return (
        <>
            <p>재생시간 : {currentTime.toFixed(2)}/{duration.toFixed(2)}s </p>
            {/* 재생바 */}
            <progress min="0" max={duration} value={currentTime}></progress>
        </>

    )
}
export default VideoInfo;