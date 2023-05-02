import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './components/axios';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
     const fetchData = async() => {
       const res = await axios.get("/v2/posts")
       setVideos(res.data)
       return res
     }
     fetchData();
  }, [])

  console.log(videos)
  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(({ url, channel, description, song, likes, shares, messages })=>(
      <Video
      key={url}
      url={url}
      channel={channel}
      description={description}
      song={song}
      likes={likes}
      shares={shares}
      messages={messages}
       />
       ))}
      {/* <Video
      url='https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4'
      channel='TheWebDev'
      description='Tuesday editing on windows pc'
      song='It is great'
      likes={345}
      shares={395}
      messages={780} 
      /> */}
      </div>
    </div>
  );
}


export default App;
