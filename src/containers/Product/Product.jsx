import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import calculateAvgRating from '@utils/calculateAvgRating'
import Hearts from '@components/Hearts/Hearts'
import RatingInfo from '@components/RatingInfo/RatingInfo'
import Media from './components/Media/Media'
import styles from './Product.pcss'

@connect({
	heading: 'product.heading',
	title: 'product.title',
	subtitle: 'product.subtitle',
	media: 'product.media',
	selectedMediaIdx: 'product.selectedMediaIdx',
	rating: 'product.rating',
})
@cssModules(styles)
export default class Product extends Component {
	render() {
		const { heading, title, subtitle, media, selectedMediaIdx, rating } = this.props

		const avgRating = calculateAvgRating(rating)

		return (
			<div styleName="product">
				<div>
					<Media media={media} selectedMediaIdx={selectedMediaIdx} />
				</div>
				<div>
					<div styleName="heading-wrapper">
						<div>
							<h1 styleName="heading">{heading}</h1>
							<h2 styleName="title">{title}</h2>
							<h3 styleName="subtitle">{subtitle}</h3>
						</div>
						<div styleName="ratingWrapper">
							<Hearts count={avgRating} />
							<div styleName="reviews-count">10 reviews</div>
							<div styleName="hoverWrapper">
								<div styleName="triangle" />
								<div styleName="borderWhite" />
								<div styleName="ratingInfoWrapper">
									<RatingInfo rating={rating} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
