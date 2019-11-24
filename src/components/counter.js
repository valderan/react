import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'; 
import { bindActionCreators } from 'redux';

//загрузка с/на сервер

const Counter = ({counter, inc, dec, res}) => {

    const getUrl = async (url = '/numbers', string = undefined) => {
        const baseUrl = 'http://localhost:3333';
        let res = undefined;
        if (string) {
            res = await fetch(`${baseUrl}${url}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(string)
            });
        } else {
            res = await fetch(`${baseUrl}${url}`);
        }
        
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }
    
    const download  = async () => {
        const result = await getUrl();
        const db = result.filter( elem => elem.hasOwnProperty('const'));
        const { min, max } = { min:0, max:2 };
        const index = Math.floor( min + Math.random() * (max + 1 - min) );
        res(+db[index].const);
    }
    
    const upload = async () => {
        const stringDb = { saved: counter };
        await getUrl(undefined,stringDb);
    }
    

    return (
        <div className="card">
            <div className="block-number">
              <div className="number">
                  {counter}
              </div>
            </div>
            <button onClick={inc} className="btn-plus"></button>
            <button onClick={dec} className="btn-minus"></button>
            <button onClick={res} className="btn-reset"></button>
            <button onClick={download} className="btn-download"></button>
            <button onClick={upload} className="btn-upload"></button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    const { inc, dec, res } = bindActionCreators( actions, dispatch);
    return {
        inc,
        dec,
        res: (value = 0) => {
            res(value);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);