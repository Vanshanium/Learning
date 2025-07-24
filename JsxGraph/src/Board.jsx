import React, { useEffect } from 'react';
import JSX from 'jsxgraph'

function Board() {

    var point_color = '#f9598bff';

    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: false,
        showCopyright: false
    }

    var fix_atr = {
        strokecolor: point_color,
        fillcolor: point_color,
        size: 6,
        face: 'o',
        fixed: true
    }

    var lose_atr = {
        strokecolor: point_color,
        fillcolor: point_color,
        size: 6,
        face: 'o',
        fixed: false
    }

    var line_atr = {
        strokeColor: '#49c9a7',
        strokeWidth: 6,
        straightFirst: false,
        straightLast: false,
        dash: 0
    }

    var semi_line_atr = {
        strokeColor: '#f3537dff',
        strokeWidth: 2,
        dash: 4
    }

    var angle_atr = {
        radius: 2,
        strokeColor: '#49c9a7',
        fillColor: '#49c9a7',
    }


    useEffect(() => {
        var board = JXG.JSXGraph.initBoard('box', board_atr)
        var a = board.create('point', [-4, 0], fix_atr);
        var b = board.create('point', [0, 0], fix_atr);
        var c = board.create('point', [4, 0], fix_atr);
        var d = board.create('point', [0, 2], lose_atr);

        var line_back = board.create('line', [a, c], semi_line_atr);
        var line = board.create('line', [a, c], line_atr);

        var line_inter = board.create('line', [b, d], semi_line_atr);
        var angle = board.create('angle', [c, b, d], angle_atr)
        var angle = board.create('angle', [d, b, a], angle_atr)

    })

    return (
        <div id="box" style={{
            width: '700px',
            height: '700px',
            border: '1px solid black'
        }}
        ></div>
    )

}

export default Board;
