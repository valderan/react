import React from 'react';
import './errMessage.css';

import img404 from './err404.png';
import img405 from './err405.png';
import img406 from './err406.png';
import img407 from './err407.png';
import img408 from './err408.png';
import img409 from './err409.png';
import img410 from './err410.png';
import imgcrit from './critical.png';

export default class ErrorMessage extends React.Component  {

    render() {
        const { errorNumber, errorText } = this.props;
        let img, alt = '';
        
        switch (errorNumber) {
            case 404:
                img = img404;
                alt = '404 - Not Found';
                break;

            case 405:
                img = img405;
                alt = '405 - Method Not Allowed';
                break;

            case 406:
                img = img406;
                alt = '406 - Not Acceptable';
                break;

            case 407:
                img = img407;
                alt = '407 - Proxy Authentication Required';
                break;

            case 408:
                img = img408;
                alt = '408 - Request Timeout';
                break;

            case 409:
                img = img409;
                alt = '409 - Conflict';
                break;

            case 410:
                img = img410;
                alt = '410 - Gone Resource';
                break;

            case (-1 || 'crit'):
                img = imgcrit;
                alt = 'Critical ERROR';
                break;

            default:
                break;

        }

        return (
                <>
                    <img src={img} alt={alt} ></img>
                    <span className="err-text">{errorText}</span>
                </>
            )
        }
    
}
