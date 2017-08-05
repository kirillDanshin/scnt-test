import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './CarouselArrow.pcss'

@cssModules(styles, { allowMultiple: true })
export default class CarouselArrow extends Component {
	render() {
		const props = { ...this.props }
		delete props.currentSlide
		delete props.slideCount
		delete props.styles

		return (
			<div {...props}>
				<i styleName={`carouselArrow ${this.props.type}`}></i>
			</div>
		)
	}
}
