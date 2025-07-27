import React, { useEffect } from 'react';
import JSX from 'jsxgraph'
import './Board.css';

function SSS() {

    var comp_color_1 = '#da416aff';
    var comp_color_2 = '#2790aaff';

    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: false,
        showCopyright: false,
        showFullscreen: true
    }

    var points_atr = {
        strokecolor: comp_color_1,
        fillcolor: comp_color_1,
        size: 6,
        face: 'o',
        fixed: false,
        snapToGrid: true

    }

    var points_atr_2 = {
        strokeColor: comp_color_2,
        fillColor: comp_color_2,
        ...points_atr,
    }

    var angle_atr = {
        radius: 1,
        strokeColor: comp_color_1,
        strokeWidth: 3,
        fillColor: comp_color_1,
    }

    var angle_atr_2 = {
        ...angle_atr,
        strokeColor: comp_color_2,
        fillColor: comp_color_2,
    }

    var poly_atr = {

        borders: {
            strokeColor: comp_color_1,
            strokeWidth: 4,
        },
        fillColor: comp_color_1,
        fillOpacity: 0.4,
    }

    var poly_atr_2 = {

        borders: {
            strokeColor: comp_color_2,
            strokeWidth: 4,
        },
        fillColor: comp_color_2,
        fillOpacity: 0.4,
    }

    var text_atr = {
        fontSize: 12,
        // fontFamily: 'calibri',
        // fontWeight: 'bold',
        // fillColor: '#040101ff',
    }

    var label_triangle = (poly, board) => {

        for (let i = 0; i < poly.borders.length; i++) {
            const side = poly.borders[i];

            const midX = () => (side.point1.X() + side.point2.X()) / 2;
            const midY = () => (side.point1.Y() + side.point2.Y()) / 2;

            board.create('text', [midX, midY, () => { return side.L().toFixed(1); }], text_atr);
        }
    }

    var congurency = (poly_1, poly_2) => {

        // Check if the number of Side is the same
        if (poly_1.borders.length !== poly_2.borders.length) {
            return false;
        }

        for (let i = 0; i < poly_1.borders.length; i++) {
            const side_1 = poly_1.borders[i];
            const side_2 = poly_2.borders[i];

            if (side_1.L().toFixed(1) !== side_2.L().toFixed(1)) {
                return false;
            }
        } 0
        return true;
    }

    var line_atr = {
        strokeColor: comp_color_1,
        strokeWidth: 4,
        straightFirst: false,
        straightLast: false,
    }

    useEffect(() => {

        var board = JXG.JSXGraph.initBoard('box', board_atr)

        // Triangle ABC
        var a = board.create('point', [-7, -7], { ...points_atr, name: 'A' });
        var b = board.create('point', [-7, 0], { ...points_atr, name: 'B' });
        var c = board.create('point', [0, -7], { ...points_atr, name: 'C' });

        var Tri_ABC = board.create('polygon', [a, b, c], poly_atr);

        var Ang_ABC = board.create('angle', [a, b, c], angle_atr);
        Ang_ABC.setAttribute({ name: () => { return Ang_ABC.Value('degrees').toFixed(0); } });

        var Ang_BCA = board.create('angle', [b, c, a], { ...angle_atr, name: 'c' });
        Ang_BCA.setAttribute({ name: () => { return Ang_BCA.Value('degrees').toFixed(0); } });

        var Ang_CAB = board.create('angle', [c, a, b], { ...angle_atr, name: 'a' });
        Ang_CAB.setAttribute({ name: () => { return Ang_CAB.Value('degrees').toFixed(0); } });


        // Triangle PQR
        var p = board.create('point', [() => { return a.X() + 8 }, () => { return a.Y() + 8 }], { ...points_atr_2, name: 'P' });
        var q = board.create('point', [() => { return b.X() + 8 }, () => { return b.Y() + 8 }], { ...points_atr_2, name: 'Q' });
        var r = board.create('point', [() => { return c.X() + 8 }, () => { return c.Y() + 8 }], { ...points_atr_2, name: 'R' });

        var Tri_PQR = board.create('polygon', [p, q, r], poly_atr_2);

        var Ang_PQR = board.create('angle', [p, q, r], { ...angle_atr_2, name: 'R' });
        Ang_PQR.setAttribute({ name: () => { return Ang_PQR.Value('degrees').toFixed(0); } });

        var Ang_QRP = board.create('angle', [q, r, p], { ...angle_atr_2, name: 'R' });
        Ang_QRP.setAttribute({ name: () => { return Ang_QRP.Value('degrees').toFixed(0); } });

        var Ang_RPQ = board.create('angle', [r, p, q], { ...angle_atr_2, name: 'P' });
        Ang_RPQ.setAttribute({ name: () => { return Ang_RPQ.Value('degrees').toFixed(0); } });



        label_triangle(Tri_ABC, board);
        label_triangle(Tri_PQR, board);

        var congruent = board.create('text', [-8, 8, () => { return congurency(Tri_ABC, Tri_PQR) ? 'Congruent' : 'Not Congruent'; }], {
            ...text_atr,
            fontSize: 30,
        });

    }, [])

    return (
        <>
            <h1>
                <span>Congurency Rule : </span>
                <span id="Rule">SSS (Side Side Side)</span>
            </h1>
            <div id="box" className="board-box"></div>
        </>
    )

}

export default SSS;
