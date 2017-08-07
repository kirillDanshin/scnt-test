import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick.css'
import actions from '@actions'
import CarouselArrow from '../CarouselArrow/CarouselArrow'
import styles from './Media.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Media extends Component {
	static propTypes = {
		media: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string.isRequired,
				link: PropTypes.string,
				youtubeID: PropTypes.string,
				name: PropTypes.string,
			})
		).isRequired,
		selectedMediaIdx: PropTypes.number,
	}

	showMedia = media => {
		if (media.type === 'image') {
			return (
				<img src={media.link} alt={media.name} />
			)
		}
		if (media.type === 'video') {
			return (
				<iframe
					src={`https://www.youtube.com/embed/${media.youtubeID}`}
					frameBorder="0"
					height={425}
					width={425}
					allowFullScreen
					/>
			)
		}
		return null
	}

	showPreview = media => {
		if (media.type === 'image') {
			return (
				<div
					styleName="preview"
					style={{
						backgroundImage: `url(${media.link})`,
					}}
					/>
			)
		}
		if (media.type === 'video') {
			return (
				<div
					styleName="preview video"
					style={{
						backgroundImage: `url(https://i.ytimg.com/vi/${media.youtubeID}/mqdefault.jpg)`,
					}}
					/>
			)
		}
		return null
	}

	selectMedia = idx => () => actions.product.selectMediaIdx(idx)

	render() {
		const { media, selectedMediaIdx } = this.props
		const selectedMedia = media[selectedMediaIdx]

		const carouselSettings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			styleName: 'carousel',
			prevArrow: <CarouselArrow type="prev" />,
			nextArrow: <CarouselArrow type="next" />,
		}

		return (
			<div>
				<div styleName="selectedMedia">
					{ selectedMedia && this.showMedia(selectedMedia) }
					<i styleName="genderIcon"></i>
				</div>
				<div styleName="carouselWrapper">
					<Carousel {...carouselSettings}>
						{media.map((item, key) => (
							<div key={key} onClick={this.selectMedia(key)}>
								{this.showPreview(item)}
							</div>
						))}
					</Carousel>
				</div>
			</div>
		)
	}
}
