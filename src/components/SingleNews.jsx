import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleNews = () => {
    const info = useLoaderData()
    console.log(info)
    return (
        <div>
            
        </div>
    );
};

export default SingleNews;