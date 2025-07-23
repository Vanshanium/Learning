class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor: Initializing");
    }

    componentDidMount() {
        console.log("Component Mounted!");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated!");
    }

    componentWillUnmount() {
        console.log("Component Unmounting...");
    }

    render() {
        return <button onClick={() => this.setState({ count: this.state.count + 1 })}>Hello</button>;
    }
}
