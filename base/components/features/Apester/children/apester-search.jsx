import React, { useState, useEffect } from 'react';
import get from 'lodash.get';
import { sendMessage, getKey } from '../../../../util/powerups/index';
import './apester.scss';

const ApesterSearch = () => {

    const [mediaID, setMediaID] = useState('5dbe8444923548b36a17547b'); // https://customembed.ellipsis.aws.arc.pub/#

    const handleFieldChange = (value) => {
        setMediaID(value);
    };

    const handleClick = () => {
        const ansCustomEmbed = {
            id: getKey(),
            url: get(window, 'location.href', ''),
            config: {
                mediaId: mediaID,
            },
        };
        sendMessage('data', ansCustomEmbed);
    };

    useEffect(() => {
        sendMessage('ready', {
        height: document.documentElement.scrollHeight,
        });
    }, []);

    return (
        <div className="container apester-search">
            <img src='https://blumbergcapital.com/wp-content/uploads/2016/02/apester_logo_400x200_2.png'/>
            <h2>Search Apester Embed</h2>
            <p>Using the Media ID, search for a published Apester embed</p>
            <label htmlFor="mediaID" className="form-label">Media ID: </label>
            <div className='search-container'>
                <input
                    type="text"
                    className="form-control search-input"
                    name="mediaID"
                    id="mediaID"
                    placeholder="12345"
                    aria-label="Media ID"
                    onChange={e => handleFieldChange(e.target.value)}>
                </input>
                <input type="button" id="btnSubmit" className="btn btn-primary search-btn" name="btnSubmit" value="Search" onClick={handleClick}></input>
            </div>
            </div>
    );
};

export default ApesterSearch;