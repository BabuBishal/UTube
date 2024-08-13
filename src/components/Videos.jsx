import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {VideoCard, ChannelCard} from '../components'

const Videos = ({videos, direction}) => {
    if(!videos?.length) return "Loading..."
    console.log(videos)

  return (
    
            <Stack direction={direction || "row"} flexWrap="wrap" gap={2} justifyContent="start" >
                {videos?.map((item, index) => (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                        {item.id.playlistId && <VideoCard video={item}/>}

                    </Box>
                   
                ))}
            </Stack>
       
  )
}

export default Videos