import React, { useEffect } from 'react';
import JSX from 'jsxgraph'
import './Board.css';

function Relations() {

    var comp_color_1 = '#da416aff';
    var comp_color_2 = '#2790aaff';

    var board_atr = {
        boundingbox: [-10, 5, 10, -10],
        // axis: true,
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
        fontSize: 15,
        // fontFamily: 'hurmit',
        // fontWeight: 'bold',
        strokeColor: '#35363aff',
    }

    var text_atr_2 = {
        fontSize: 30,
        strokeColor: comp_color_2,
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

        var ab = board.create('text', [0, 0, 'AB'], text_atr_2)

        var sine = board.create('text', [0, 4, getSin], text_atr_2);

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

