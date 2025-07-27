import React, { useEffect } from 'react';
import JSX from 'jsxgraph'
import './Board.css';

function Linear_pair() {

    var point_color = '#f9598bff';

    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: false,
        showCopyright: false,
        showFullscreen: true
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
        strokeWidth: 3,
        dash: 4
    }


    var angle_color = '#ebb840ff';
    var angle1_atr = {
        radius: 2,
        strokeColor: angle_color,
        strokeWidth: 3,
        fillColor: angle_color,
    }

    angle_color = '#53abf3ff';
    var angle2_atr = {
        radius: 1.7,
        strokeColor: angle_color,
        strokeWidth: 3,
        fillColor: angle_color,
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
        var angle2 = board.create('angle', [d, b, a], angle1_atr)
        var angle1 = board.create('angle', [c, b, d], angle2_atr)
        var text = board.create('text', [-9, 9, 'Linear Pair Axiom'], {
            fontSize: 20,
            fontFamily: 'Arial',
            color: '#ebb840ff'
        })
    }, [])

    return (
        <div id="box" className="board-box"></div>
    )

}

export default Linear_pair;
