import React, { useEffect } from 'react';
import JSX from 'jsxgraph'
import './Board.css';

function Unit() {

    var comp_color_1 = '#da416aff';
    var comp_color_2 = '#2790aaff';

    var board_atr = {
        boundingbox: [-10, 5, 10, - 10],
        // keepAspectRatio: false,
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

        var board = JXG.JSXGraph.initBoard('box', { boundingbox: [-10, 10, 10, -10], axis: true });

        // Slider for amplitude
        var slider = board.create('slider', [[-9, 8], [-3, 8], [1, 1, 5]], { name: 'a' });

        // Function graph depending on slider
        var curve = board.create('functiongraph', [
            function (x) { return slider.Value() * Math.sin(x); }
        ], { strokeColor: 'blue' });

        // var brd = JXG.JSXGraph.initBoard('box', board_atr)

        // var ax = brd.create('line', [[0, 0], [1, 0]], { visible: false });
        // var ay = brd.create('line', [[0, 0], [0, 1]], { visible: false });

        // var p0 = brd.create('point', [0, 0], { fixed: true, visible: false });
        // var p1 = brd.create('point', [1, 0], { name: '', visible: false, fixed: true });
        // var c = brd.create('circle', [p0, p1], { dash: 2, strokeWidth: 1, strokeOpacity: 0.6 });
        // var p2 = brd.create('glider', [0.4, 1.0, c], { name: '', withLabel: false });
        // var p3 = brd.create('point', [function () { return p2.X(); }, 0.0], { visible: false, name: '', withLabel: false });
        // var p4 = brd.create('point', [0.0, function () { return p2.Y(); }], { visible: false, name: '', withLabel: false });

        // brd.create('line', [p0, p2], { straightFirst: false, straightLast: false, strokeColor: 'black' });   // Hypotenuse
        // brd.create('line', [p2, p3], { straightFirst: false, straightLast: false, strokeColor: 'red' });     // sin
        // brd.create('line', [p2, p4], { straightFirst: false, straightLast: false, strokeColor: 'red' });     // cos

        // var t = brd.create('tangent', [p2], { visible: false });
        // var p5 = brd.create('intersection', [t, ax, 0], { visible: false, name: '', withLabel: false });
        // var p6 = brd.create('intersection', [t, ay, 0], { visible: false, name: '', withLabel: false });
        // brd.create('line', [p5, p6], { straightFirst: false, straightLast: false });                       // tan + cot
        // brd.create('line', [p0, p6], { straightFirst: false, straightLast: false, strokeColor: 'green' });   // csc
        // brd.create('line', [p0, p5], { straightFirst: false, straightLast: false, strokeColor: 'green' });   // sec

        // brd.create('text', [
        //     function () { return (p0.X() + p2.X()) * 0.5; },
        //     function () { return (p0.Y() + p2.Y()) * 0.5; },
        //     '1'], {});

        // brd.create('text', [
        //     function () { return (p2.X() + p4.X()) * 0.3; },
        //     function () { return (p2.Y() + p4.Y()) * 0.5; },
        //     'cos'], {});

        // brd.create('text', [
        //     function () { return (p2.X() + p3.X()) * 0.5; },
        //     function () { return (p2.Y() + p3.Y()) * 0.5; },
        //     'sin'], {});

        // brd.create('text', [
        //     function () { return 0.1 + (p2.X() + p5.X()) * 0.5; },
        //     function () { return 0.1 + (p2.Y() + p5.Y()) * 0.5; },
        //     'tan'], {});

        // brd.create('text', [
        //     function () { return 0.1 + (p2.X() + p6.X()) * 0.5; },
        //     function () { return 0.1 + (p2.Y() + p6.Y()) * 0.5; },
        //     'cot'], {});

        // brd.create('text', [
        //     function () { return -0.2 + (p0.X() + p6.X()) * 0.5; },
        //     function () { return (p0.Y() + p6.Y()) * 0.5; },
        //     'csc'], {});

        // brd.create('text', [
        //     function () { return (p0.X() + p5.X()) * 0.5; },
        //     function () { return (p0.Y() + p5.Y()) * 0.5; },
        //     'sec'], {});
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

export default Unit;

