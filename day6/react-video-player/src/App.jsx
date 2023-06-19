import { useRef } from 'react'
import './App.css'

import VideoView from './compenets/VideoView';
import VideoInfo from './compenets/VideoInfo';
import VideoBtn from './compenets/VideoBtn';


function App() {
  const videoLink = './madia/video.mp4';
  const videoRef = useRef(videoLink);


  return(
    <div className='App'>
      <VideoView videoRef={videoRef} videoLink={videoLink}></VideoView>
      <VideoInfo videoRef={videoRef} ></VideoInfo>
      <VideoBtn  videoRef={videoRef} ></VideoBtn>
    </div>
  )
}
export default App


// function App() {
//   const [duration, setDuration] = useState(0);//영상길이
//   const [currentTime, setCurrentTime] = useState(0);// 현재시간
//   // 비디오(useRef) 이름
//   const videoRef = useRef('./madia/video.mp4');
  

//   const playVid = () => {
//     // 비디오 시작
//     videoRef.current.play();
//   }

//   //비디오 재생 hook
//   useEffect(() => {
//     // 동영상 시작전 영상 전체길이 로드
//     videoRef.current.addEventListener('loadedmetadata',()=>{setDuration(videoRef.current.duration);});
    
//     setCurrentTime(videoRef.current.currentTime);
    
//     let videoInterval = setInterval(() => {
//       setCurrentTime(videoRef.current.currentTime);
      
//     }, 1000);

//     // 인터벌 clean
//     return () => clearInterval(videoInterval);
//   }, [currentTime])


//   const pauseVid = () => {
//     videoRef.current.pause();
//   }
//   const stopVid = ()=>{
//     videoRef.current.pause();
//     videoRef.current.currentTime=0;
//   }

//   return (
//     <div className='App'>
//       <h1>Ract video</h1>
//       <video ref={videoRef} src='./madia/video.mp4' ></video>
//       <p>재생시간 : {currentTime.toFixed(2)}/{duration.toFixed(2)}s </p>
//         {/* 재생바 */}
//       <progress min="0" max={duration} value={currentTime}></progress>
//       <div className="btn-group">
//         <button className="play" onClick={playVid}>시작</button>
//         <button className="pause" onClick={pauseVid}>일시중지</button>
//         <button className="stop" onClick={stopVid}>중지</button>
//       </div>
//     </div>
//   )
// }

// export default App
