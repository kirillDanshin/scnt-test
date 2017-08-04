import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import Hearts from '@components/Hearts/Hearts'
import Media from './components/Media/Media'
import styles from './Product.pcss'

@connect({
	heading: 'product.heading',
	title: 'product.title',
	subtitle: 'product.subtitle',
	media: 'product.media',
	selectedMediaCount: 'product.selectedMediaCount',
})
@cssModules(styles)
export default class Product extends Component {
	render() {
		const { heading, title, subtitle, media, selectedMediaCount } = this.props

		return (
			<div styleName="product">
				<div>
					<Media media={media} selectedMediaCount={selectedMediaCount} />
				</div>
				<div>
					<div styleName="heading-wrapper">
						<div>
							<h1 styleName="heading">{heading}</h1>
							<h2 styleName="title">{title}</h2>
							<h3 styleName="subtitle">{subtitle}</h3>
						</div>
						<div>
							<Hearts count={3} />
							<div styleName="reviews-count">10 reviews</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
