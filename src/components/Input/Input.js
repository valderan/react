import React from 'react';
import styled from 'styled-components';

const InputForm = styled.div`
    width: 100%;
    height: 15%;
    position: relative;

    input {
        position: absolute;
        left: 5%;
        width: 90%;
        padding: 12px 20px;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.67);
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.4);   
    }

    .btn-hide {
        position: absolute;
        width: 133px;
        height: 40px;
        background: #FFE482;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        left: 20%;
        top: 80%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .btn-new {
        position: absolute;
        width: 133px;
        height: 40px;
        top: 80%;
        left: 60%;
        background: #FFFFFF;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`;

function Input() {
    return(
        <InputForm>
            <input type="text" placeholder="Enter a new todo item" /> 
            <button className="btn-hide">Hide complete</button>
            <button className="btn-new">Add new</button>
        </InputForm>   
    )
}

export default Input;