These are the points, they need x,y cordinate to be created

```javascript
    var board_atr = {
        boundingbox: [-10, 10, 10, -10],
        axis: true,
        showCopyright: false
    }

    var point_atr = {
        name: 'A',
        strokecolor: '#49c9a7',
        fillcolor: '#49c9a7',
        size: 5,
        face: 'o',
        fixed: false
    }


    useEffect(() => {
        var board = JXG.JSXGraph.initBoard('box', board_atr)
        var x = board.create('point', [1, 3], point_atr);
        var b = board.create('point', [1, () => { return x.X(); }], point_atr);
    })
```