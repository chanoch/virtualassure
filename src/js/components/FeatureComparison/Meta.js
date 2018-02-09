import React from 'react';

export default class Meta extends React.PureComponent {
    render() {
        const {feature} = this.props;
        return (
            <figure className="meta">
                <div>{feature.summary}</div>
                <div className="tags">
                    {feature.tags.map((tag) => {
                        return (
                            <span key={tag.key} className="tag article">{tag.text}</span>
                        )
                    })}
                </div>
            </figure>
        )
    }
}