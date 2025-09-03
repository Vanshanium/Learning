import React, { useEffect } from 'react';
import JSX from 'jsxgraph'
import './Board.css';

function Relations() {

    var comp_color_1 = '#da416aff';
    var comp_color_2 = '#2790aaff';

    var board_atr = {
        boundingbox: [-10, 5, 10, -10],
        keepAspectRatio: false,
        showCopyright: false,
        showFullscreen: true
    }

    var points_atr = {
        strokecolor: comp_color_1,
        fillcolor: comp_color_1,
        size: 6,
        face: 'o',
        // fixed: true,
        snapToGrid: true

    }

    var angle_atr = {
        radius: 1,
        strokeColor: comp_color_1,
        strokeWidth: 4,
        fillColor: comp_color_1,
    }

    var poly_atr = {

        borders: {
            strokeColor: comp_color_1,
            strokeWidth: 4,
        },
        fillColor: comp_color_1,
        fillOpacity: 0.4,
    }


    var text_atr = {
        fontSize: 30,
        // fontFamily: 'hurmit',
        // fontWeight: 'bold',
        strokeColor: '#35363aff',
    }

    var text_atr_2 = {
        fontSize: 32,
        strokeColor: '#35363aff',
    }

    var label_triangle = (poly, board) => {

        for (let i = 0; i < poly.borders.length; i++) {
            const side = poly.borders[i];

            const midX = () => (side.point1.X() + side.point2.X()) / 2;
            const midY = () => (side.point1.Y() + side.point2.Y()) / 2;

            board.create('text', [midX, midY, () => { return side.L().toFixed(1); }], text_atr);
        }
    }


    var line_atr = {
        strokeColor: comp_color_1,
        strokeWidth: 4,
        fillColor: comp_color_1,
        straightFirst: false,
        straightLast: false,
    }

    useEffect(() => {

        var board = JXG.JSXGraph.initBoard('box', board_atr)

        // // Triangle ABC
        var a = board.create('point', [-7, -7], { ...points_atr, name: 'A', });
        var c = board.create('point', [0, -7], { ...points_atr, name: 'C' });
        var AC = board.create('line', [a, c], line_atr);
        var per_line = board.create('perpendicular', [AC, c], { strokeWidth: 0, visible: false });

        var b = board.create('glider', [0, 0, per_line], { ...points_atr, name: 'B' });

        var AB = board.create('line', [a, b], line_atr);
        var BC = board.create('line', [b, c], line_atr);


        var Tri_ABC = board.create('polygon', [a, b, c], poly_atr);

        var Ang_CAB = board.create('angle', [c, a, b], angle_atr);
        Ang_CAB.setAttribute({ name: () => { return Ang_CAB.Value('degrees').toFixed(0); } });

        var Ang_BCA = board.create('angle', [b, c, a], angle_atr);

        label_triangle(Tri_ABC, board);

        // Get angle X (CAB) and side lengths AB, AC dynamically
        const getSin = () => {
            return `Sin(${Ang_CAB.Value('degrees').toFixed(0)}°) = ${BC.L().toFixed(2)} / ${AB.L().toFixed(2)} = ${(BC.L() / AB.L()).toFixed(2)}`;
        };


        // This is Garbage code, but it works
        // I will fix it later

        var vinculum = board.create('line', [[3.9, -1.35], [6.5, -1.35]], { strokeColor: comp_color_2, strokeWidth: 4, straightFirst: false, straightLast: false });
        var vinculum = board.create('line', [[3.9, -3.35], [6.5, -3.35]], { strokeColor: comp_color_2, strokeWidth: 4, straightFirst: false, straightLast: false });
        var tan_vinculum = board.create('line', [[3.9, -5.35], [6.5, -5.35]], { strokeColor: comp_color_2, strokeWidth: 4, straightFirst: false, straightLast: false });

        var sine = board.create('text', [1, -1, () => `Sin(${Ang_CAB.Value('degrees').toFixed(0)}°) = BC = ${BC.L().toFixed(2)} = ${(BC.L() / AB.L()).toFixed(2)}`], text_atr_2);
        var sine_deno = board.create('text', [3.9, -1.7, () => `AB \u00A0\u00A0${AB.L().toFixed(2)}`], text_atr_2);


        var cosine = board.create('text', [1, -3, () => `Cos(${Ang_CAB.Value('degrees').toFixed(0)}°) = AC = ${AC.L().toFixed(2)} = ${(AC.L() / AB.L()).toFixed(2)}`], text_atr_2);
        var cosine_deno = board.create('text', [3.9, -3.7, () => `AB \u00A0\u00A0${AB.L().toFixed(2)}`], text_atr_2);


        var tan = board.create('text', [1, -5, () => `Tan(${Ang_CAB.Value('degrees').toFixed(0)}°) = BC = ${BC.L().toFixed(2)} = ${(BC.L() / AC.L()).toFixed(2)}`], text_atr_2);
        var tan_deno = board.create('text', [3.9, -5.7, () => `AC \u00A0\u00A0${AC.L().toFixed(2)}`], text_atr_2);

    }, [])

    return (
        <>
            <h1>
                <span>Relations Between </span>
                <span id="Rule"> Angles and the Sides</span>
            </h1>
            <div id="box" className="board-box"></div>
        </>
    )

}

export default Relations;

