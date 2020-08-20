import React, { Component } from "react"

class textBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        this.props.onClick(e);
        this.setState({
            value: e
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value && this.state.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    render() {
        return (

            <div>

                <input type="text"
                    onChange={e => this.handleChange(e.target.value)}
                    defaultValue={this.props.value}
                >
                </input>

            </div>

        );
    }
}
export default textBox;