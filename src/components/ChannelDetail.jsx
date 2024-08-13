import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Videos, ChannelCard} from './'
import fetchFromAPI from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
// console.log(channelDetail, videos)

  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          zIndex: "10",
          height: "300px",
          background: 'rgb(23,232,195)',
          background: 'linear-gradient(0deg, rgba(0,0,0,1) 15%, rgba(23,6,40,1) 43%, rgba(3,3,0,1) 90%)'
        }}/>
        <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>
      </Box >
      <Box display= "flex" p="2">
      <Box sx={{ mr: { sm: '120px'}}} />
      <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail