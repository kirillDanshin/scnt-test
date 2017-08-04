import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './Search.pcss'

@cssModules(styles)
export default class Search extends Component {
	render() {
		const { className, dark } = this.props

		return (
			<div className={className} styleName={`search-container ${dark ? 'dark' : ''}`}>
				<input styleName="search" placeholder="Search" />
			</div>
		)
	}
}
