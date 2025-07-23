import React, { useEffect } from 'react';
import JSX from 'jsxgraph'

function Board() {

    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: true,
        showCopyright: false
    }
    useEffect(() => {
        var board = JXG.JSXGraph.initBoard('box', board_atr)
    })

    return (
        <div id="box" style={{
            width: '500px',
            height: '500px',
            border: '1px solid black'
        }}
        ></div>
    )

}

export default Board;
