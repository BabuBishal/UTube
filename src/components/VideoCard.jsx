import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoChannelTitle, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl } from '../utils/Constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{
        width: { xs: "100%", sm: 358, md: 320,},
        boxShadow: "none",
        borderRadius: "8px"
    }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url }
            alt={snippet?.title}
            sx={{width: {xs: '100%', sm: '358px', md: 320}, height: 180}}
            />
        </Link>
        <CardContent sx={{
            background: "#080c0f",
            height: "100px"
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography 
                variant='subtitle1'
                fontWeight="bold"
                color= "white"
                >
                    {snippet?.title.length>60 ? `${snippet?.title.slice(0,60)}...` || `${demoVideoTitle.slice(0,60)}...`: snippet?.title || `${demoVideoTitle.slice(0,60)}...`}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                <Typography 
                variant='subtitle2'
                fontWeight="bold"
                color= "gray"
                >
                    {snippet?.channelTitle || demoChannelTitle} 
                    <CheckCircle sx={{color: "gray" , fontSize: "12px", ml: "5px"}} />
                </Typography>
            </Link>
        </CardContent>
        
    </Card>
  )
}

export default VideoCard