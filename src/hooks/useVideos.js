import { useState, useEffect } from 'react';
import youtube from '../APIs/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
     }, [defaultSearchTerm]);

     const search = async (term) => {
        const response = await youtube.get("/search", {
           params: {
              q: term
           }
        });

        setVideos(response.data.items);
      
    };

    return [videos, search]  //returns an array, the list of videos and the search function

};

export default useVideos;