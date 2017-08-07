import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import styles from './Description.pcss'

@connect({
	description: 'product.fullDescription',
})
@cssModules(styles)
export default class Description extends Component {
	render() {
		const { description } = this.props

		return (
			<div styleName="container">
				<h1 styleName="title">People who wear this also like</h1>
				{
					description.split('\n\n').map((v, idx) => (
						<p styleName="paragraph" key={idx}>
							{v}
						</p>
					))
				}
			</div>
		)
	}
}
