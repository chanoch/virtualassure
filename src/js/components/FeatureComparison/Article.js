import React from 'react';

import Meta from './Meta';
/** 
 * An article takes the following structure
 * 
 * Title - h2 rendering of {feature.title}
 * Meta - a summary subtitle. 
 *      - an array of tags to classify the article
 * Desription - An array of unformatted paragraph text.
 */
export default class Article extends React.PureComponent {
    render() {
        const {feature} = this.props;
        return (
            <div className="col-12 col-sm-12 offset-md-1 col-md-7 article">
                <section id="content">
                    <article className="blog-post">
                        <header><h2>{feature.title}</h2></header>

                        <Meta feature={feature} />

                        {feature.description.map((line) => <p key={line.key}>{line.text}</p>)}
                    </article>
                </section>
            </div>
        )
    }
}
