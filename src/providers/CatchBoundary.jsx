import React, {Component} from 'react';
import {withRouter}       from "react-router-dom";

class CatchBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (this.state.errorInfo) {
                this.setState({error: null, errorInfo: null});
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({
                          error    : error,
                          errorInfo: errorInfo
                      });
    }

    resetError = () => this.setState({error: null, errorInfo: null});

    render() {
        if (this.state.errorInfo) {
            return <h4 className="text-danger">Oops! something went wrong...</h4>;
        }

        return this.props.children;
    }
}

export default withRouter(CatchBoundary);
