import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import Button from '@components/Button/Button'
import styles from './CartAction.pcss'

@cssModules(styles)
export default class CartAction extends Component {
	static propTypes = {
		option: PropTypes.shape({
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			preview: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		}).isRequired,
	}

	render() {
		const { option: { type, name, preview, price } = {} } = this.props
		const isSubscription = type === 'subscription'

		return (
			<div styleName="cartAction">
				<div styleName="product">
					<img styleName="preview" src={preview} alt={name} />
					<div>
						<span styleName="priceText">
							{isSubscription ? 'Subscription ' : 'A la carte '}price:
						</span>
						<strong styleName="price"> ${price}</strong>
						{isSubscription && <div styleName="description">30-day supply of this scent</div>}
					</div>
				</div>
				<div>
					<Button>Add to {isSubscription ? 'queue' : 'cart'}</Button>
				</div>
			</div>
		)
	}
}
