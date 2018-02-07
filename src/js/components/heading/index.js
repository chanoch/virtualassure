import React from 'react';

export default class Heading extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="heading">
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </div>
        );
    }
}


