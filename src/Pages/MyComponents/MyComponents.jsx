import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Summary from '../Summary/Summary';

const MyComponent = () => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
                setShows(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleFetchDataById = (id) => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => {
                setSelectedShow(data);
                localStorage.setItem('selectedShow', JSON.stringify(data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="container">
            <h1>TV Shows</h1>
            <div className="row">
                {shows.map(show => (
                    <div className="col-12 col-md-6 mb-4" key={show.show.id}>
                        <div className="card">
                            <img src={show.show.image?.medium} className="card-img-top" alt={show.show.name} />
                            <div className="card-body">
                                <h5 className="card-title">{show.show.name}</h5>
                                <p className="card-text">Language: {show.show.language}</p>
                                <p className="card-text">Premiered: {show.show.premiered}</p>
                                <button> <Link
                                    to={`/shows/${show.show.id}`}
                                    onClick={() => handleFetchDataById(show.show.id)}
                                >
                                    Details
                                </Link></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedShow && <Summary selectedShow={selectedShow}></Summary>}
        </div>
    );
};

export default MyComponent;