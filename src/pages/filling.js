import React, {useState, useEffect} from 'react';
import './filling.css';
import { Flex } from '@aws-amplify/ui-react';
import Pill from '../components/pill.js';
import ReactMarkdown from 'react-markdown';

function PieDetails(props) {

    return (
        <div className='piedetails-main'>
            <div className='button-div'>
            <button id='back-button' 
                onClick={() => {
                    props.showPie({show: false});
                }}
            >&lt; Go Back</button>
            </div>
            <div className='header'>
                <div className='title'>
                    <h1>{props.name}</h1> 
                </div>
            </div>
            <div className='body'>
                <img className='pie-image' src={props.image} />
                <div className='textbox'>
                    <h3>{props.shortdesc}</h3>
                    <ReactMarkdown>{props.longdesc}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default PieDetails;