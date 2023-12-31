import React from 'react';

class StyleText extends React.Component {
    render() {
        const divStyle = {
            fontSize: this.props.fontSize,
            // justifyContent: 'space-evenly',
            fontFamily: "Fira Sans",
            fontStyle: this.props.fontStyle ? this.props.fontStyle : 'normal',
            fontWeight: this.props.fontWeight,
            textAlign: this.props.textAlign ? this.props.textAlign : 'center',
        };

        return (
            <span style={divStyle}>
                {this.props.children}
            </span>
        );
    }
}

export default StyleText;