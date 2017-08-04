import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import cssModules from 'react-css-modules'
import cx from 'classnames'
import styles from './Menu.pcss'

@connect({
	categories: 'categories.main.list',
	selected: 'categories.main.selected',
})
@cssModules(styles, { allowMultiple: true })
export default class Menu extends Component {
	render() {
		const { categories, selected } = this.props


		return (
			<div styleName="container">
				<nav styleName="wrapper">
					{categories && categories.map((cat, idx) => {
						const itemStyle = cx('item', {
							active: idx === selected,
						})

						return (
							<a styleName={itemStyle} key={idx}>{cat.get('name')}</a>
						)
					})}
				</nav>
			</div>
		)
	}
}
