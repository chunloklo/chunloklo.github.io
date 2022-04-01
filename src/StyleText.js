import React from 'react';

class StyleText extends React.Component {
    render() {
        const divStyle = {
            fontSize: this.props.fontSize,
            justifyContent: 'space-evenly',
            fontFamily: "Fira Sans",
            fontWeight: this.props.fontWeight,
        };

        return (
            <span style={divStyle}>
                {this.props.children}
            </span>
        );
    }
}

export default StyleText;