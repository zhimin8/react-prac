import React, { Component } from 'react';

class Partner extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.parterName}</h2>
                <p>{this.props.admin}</p>
                <p>{this.props.address}</p>
                <p>{this.props.review}</p>
            </div>

        );
    }
}

export default Partner;