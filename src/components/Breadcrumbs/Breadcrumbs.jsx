import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import cx from 'classnames'
import styles from './Breadcrumbs.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Breadcrumbs extends Component {
	static propTypes = {
		crumbs: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			link: PropTypes.string,
		})).isRequired,
	}
	
	render() {
		const { crumbs } = this.props


		return (
			<div styleName="container">
				{
					crumbs && crumbs.map((crumb, idx) => {
						const itemStyle = cx('crumb', {
							inactive: !crumb.link,
						})

						return (
							<div styleName={itemStyle}>
								<a key={idx}>{crumb.name}</a>

								{idx < crumbs.length - 1 && <div styleName="arrow"></div>}
							</div>
						)
					})
				}
			</div>
		)
	}
}
