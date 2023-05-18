import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Alltoys = () => {
    
    const alltoys = useLoaderData();
    
    return (
        <div>
            this is the page
        </div>
    );
};

export default Alltoys;