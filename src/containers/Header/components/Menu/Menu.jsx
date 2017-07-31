import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import cssModules from 'react-css-modules'
import styles from './Menu.pcss'

@connect({
	categories: 'categories.main.list',
})
@cssModules(styles)
export default class Menu extends Component {
	render() {
		const { categories } = this.props
		return (
			<div styleName="menu-container">
				<div styleName="menu-wrapper">
					{categories && categories.map((cat, idx) => (
						<a styleName="item" key={idx}>{cat.get('name')}</a>
					))}
				</div>
			</div>
		)
	}
}
