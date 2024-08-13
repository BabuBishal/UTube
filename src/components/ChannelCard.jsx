import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'

const ChannelCard = ({channelDetail, marginTop}) => (
    <Box
    sx={{
        boxShadow: "none",
        borderRadius: "8px",
        width: {xs: 356, md: 320},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "326px",
        margin: "auto",
        // background: "#080c0f",
        marginTop
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                // background: "#080c0f",
                
            }}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{
                    borderRadius: "50%",
                    width: "180px",
                    height: "180px",
                    mb: 2,
                    border: "1px solid #e3e3e3"
                }}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{color: "gray" , fontSize: "14px", ml: "5px"}} />

                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                ) }
            </CardContent>
        </Link>
        
    </Box>
  )


export default ChannelCard