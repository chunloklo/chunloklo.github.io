import React from 'react';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.href} target='_blank'>
                {this.props.children}
            </a>
        );
    }
}

export default Link;