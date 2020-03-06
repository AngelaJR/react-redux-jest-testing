import React, { Component } from 'react';

class Headline extends Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		const {header, desc} = this.props;

		if(!header){
			return null;
		}
		
		return(
			<div className="headline-container" data-test='headline-component'>
				<h1 data-test='headline-header'>{header}</h1>
				<p data-test='headline-desc'>
					{desc}
				</p>
				
			</div>
		);
	}
}

export default Headline;