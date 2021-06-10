import React from 'react'
import VideoItem from './VideoItem';


const VideodList = ({ videos, onVideoSelect }) => { //videos are destructured from props
    const renderedList = videos.map((video) => {
        return( 
        <VideoItem 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect} 
        video={video} 
        />
        );
    });

    return(
        <div className="ui relax divided list">
            {renderedList}
        </div>
    )
} 

export default VideodList;