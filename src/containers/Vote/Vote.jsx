import React, { Component } from 'react'
import Slider from 'rc-slider'
import styles from './Vote.pcss'
import actions from '@actions'

@cssModules(styles)
export default class Vote extends Component {
	handleChange = type => v => {

	}

	render() {
		return (
			<Slider onChange={this.handleChange} />
		)
	}
}
