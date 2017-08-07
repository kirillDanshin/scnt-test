import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import styles from './Recommendations.pcss'

@connect({
	recoms: 'product.recommendations',
})
@cssModules(styles)
export default class Recommendations extends Component {
	render() {
		const { recoms } = this.props

		return (
			<div styleName="container">
				<h1 styleName="title">People who wear this also like</h1>
				<div styleName="wrapper">
					{
						recoms.map(({ link, brand, title }, idx) => (
							<div key={idx}>
								<img alt={`${brand} ${title}`} src={link} />
								<p styleName="brand">{brand}</p>
								<p>{title}</p>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}
