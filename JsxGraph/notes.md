
```javascript
import React, { useEffect } from 'react';
import JSX from 'jsxgraph'                  // npm package 

function Board() {

    // Attributes for the graph 

    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: true,
        showCopyright: false
    }
    
    // This make sure that box element loads so that this function can edit it. 
    
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
```