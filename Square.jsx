import React, { useState } from 'react';

function Square({value, handleOnClick}){
    return (
    <div>
        <button onClick={handleOnClick}>{value}</button>
    </div>)
}

export default Square;