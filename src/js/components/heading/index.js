import React from 'react';

export default class PageHeading extends React.PureComponent {
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

export class SectionHeading extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="block">
                <div className="container">
                    <h2>{title}</h2>
                </div>
            </div>
        );
    }
}


