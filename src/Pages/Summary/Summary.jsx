import React, { useEffect, useState } from 'react';

const Summary = () => {
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        const storedSelectedShow = localStorage.getItem('selectedShow');
        if (storedSelectedShow) {
            setSelectedShow(JSON.parse(storedSelectedShow));
        }
    }, []);
    console.log(selectedShow);
    return (
        <div className="container p-6">
            <div className='card'>
                <h2 className='text-primary'>This Movie Name Is: {selectedShow?.name}</h2>
                <h1>Premiered: {selectedShow?.premiered} || Ended Date: {selectedShow?.ended
                }</h1>
                <h4>Average Runtime: {selectedShow?.averageRuntime}</h4>
                <h4>Language: {selectedShow?.language}</h4>
                <h4 className='text-accent'>IMDB Rating: {selectedShow?.rating.average
                }</h4>
                <h3>Genres: {selectedShow?.genres[0]}</h3>
                <h4 className=''> All the description if Movies Is:{selectedShow?.summary}</h4>
                <button className='
                btn btn-accent'>Select To Show</button>
            </div>
        </div>
    );
};

export default Summary;