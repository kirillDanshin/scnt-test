import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import calculateAvgRating from '@utils/calculateAvgRating'
import Button from '@components/Button/Button'
import Select from '@components/Select/Select'
import Hearts from '@components/Hearts/Hearts'
import RatingInfo from '@components/RatingInfo/RatingInfo'
import Review from './components/Review/Review'
import styles from './Reviews.pcss'

@connect({
	rating: 'product.rating',
	reviews: 'reviews',
})
@cssModules(styles, { allowMultiple: true })
export default class Reviews extends Component {
	render() {
		const { rating } = this.props
		let { reviews } = this.props
		reviews = reviews.toJS()

		const sortVariants = ['Most recent', 'Most helpful']
		const avgRating = calculateAvgRating(rating)

		return (
			<div styleName="container">
				<h2 styleName="title desktop">Cartier eau de cartier essence de bois rating and reviews</h2>
				<h2 styleName="title mobile">Rating and reviews</h2>
				<div styleName="heading">
					<div styleName="wrapper">
						<div styleName="headingLeft">
							<div styleName="sortByWrapper">
								<span styleName="subTitle">sort by</span>
								<Select options={sortVariants} styleName="select" />
							</div>
							<div>
								<div>
									<span styleName="subTitle">avarage rating </span>
									<span styleName="reviewsCount">({reviews.length} reviews)</span>
								</div>
								<div styleName="heartsWrapper">
									<Hearts count={avgRating} styleName="hearts" />
									{avgRating} out of 5
								</div>
								<RatingInfo
									rating={rating}
									small
									activeLineIdx={parseInt(avgRating, 10)}
									/>
							</div>
						</div>
						<div styleName="buttonWrapper">
							<Button
								verticalPadding={17}
								horizontalPadding={85}
								fontSize={14}
								bold>
								Write a review
							</Button>
						</div>
					</div>
				</div>
				<div styleName="reviews">
					{
						reviews.map((review, key) => (
							<Review key={key} reviewIdx={key} {...review} />
						))
					}
				</div>
			</div>
		)
	}
}
