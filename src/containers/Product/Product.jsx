import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import cx from 'classnames'
import actions from '@actions'
import calculateAvgRating from '@utils/calculateAvgRating'
import Hearts from '@components/Hearts/Hearts'
import RatingInfo from '@components/RatingInfo/RatingInfo'
import Media from './components/Media/Media'
import CartAction from './components/CartAction/CartAction'
import Options from './components/Options/Options'
import styles from './Product.pcss'

@connect({
	heading: 'product.heading',
	title: 'product.title',
	subtitle: 'product.subtitle',
	description: 'product.description',
	media: 'product.media',
	selectedMediaIdx: 'product.selectedMediaIdx',
	rating: 'product.rating',
	options: 'product.options',
	selectedOptionIdx: 'product.selectedOptionIdx',
	info: 'product.info',
	selectedInfoIdx: 'product.selectedInfoIdx',
})
@cssModules(styles, { allowMultiple: true })
export default class Product extends Component {
	selectInfoIdx = idx => () => (actions.product.selectInfoIdx(idx))

	render() {
		const {
			heading,
			title,
			subtitle,
			description,
			media,
			selectedMediaIdx,
			rating,
			options,
			selectedOptionIdx,
			info,
			selectedInfoIdx,
		} = this.props

		const avgRating = calculateAvgRating(rating)
		const selectedOption = options[selectedOptionIdx]
		const selectedInfoContent = info[selectedInfoIdx].content

		return (
			<div styleName="container">
				<div styleName="mediaWrapper">
					<Media media={media} selectedMediaIdx={selectedMediaIdx} />
				</div>
				<div>
					<div styleName="headingWrapper">
						<div>
							<h1 styleName="heading">{heading}</h1>
							<h2 styleName="title">{title}</h2>
							<h3 styleName="subtitle">{subtitle}</h3>
						</div>
						<div styleName="ratingWrapper">
							<Hearts count={avgRating} />
							<div styleName="reviewsCount">10 reviews</div>
							<div styleName="hoverWrapper">
								<div styleName="triangle" />
								<div styleName="borderWhite" />
								<div styleName="ratingInfoWrapper">
									<RatingInfo rating={rating} />
								</div>
							</div>
						</div>
					</div>
					<CartAction option={selectedOption} />
					<Options options={options} selectedOptionIdx={selectedOptionIdx} />
					<div styleName="descriptionWrapper">
						<div styleName="descriptionTitle">Description</div>
						<p styleName="description">{description}</p>
					</div>
					<div styleName="infoWrapper">
						<div styleName="infoTabs">
							{
								info.map((v, idx, arr) => {
									const styleName = cx('infoTab', {
										active: idx === selectedInfoIdx,
										first: idx === 0,
										last: idx === arr.length - 1,
									})

									return (
										<div
											key={idx}
											styleName={styleName}
											onClick={this.selectInfoIdx(idx)}>
											{v.title}
										</div>
									)
								})
							}
						</div>
						<div styleName="infoContent">{selectedInfoContent}</div>
					</div>
				</div>
			</div>
		)
	}
}
