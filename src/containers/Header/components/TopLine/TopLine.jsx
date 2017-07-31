import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import cssModules from 'react-css-modules'
import styles from './TopLine.pcss'
import profileIcon from './images/profile.svg'
import cartIcon from './images/cart.svg'

@connect({
	name: 'user.name',
	count: 'cart.items.count',
})
@cssModules(styles)
export default class TopLine extends Component {
	render() {
		const { name, count } = this.props

		return (
			<div styleName="top-line">
				<div styleName="wrapper">
					<div styleName="left">
						<a>Wall of love</a>
						<a>Send a gift</a>
					</div>

					<div styleName="right">
						<div styleName="profile-container">
							<img alt="profile" src={profileIcon} />
							{name}
						</div>
						<div styleName="cart-container">
							<img alt="cart" src={cartIcon} />
							<a>Cart (<span styleName="count">{count}</span>)</a>
						</div>
					</div>
				</div>

				<div styleName="mobile">
					<div styleName="toggle-area">
						<div styleName="toggle" />
					</div>
					<div styleName="content">
						<a>Wall of love</a>
						<a>Send a gift</a>
						<a>Get free parfum</a>
					</div>
				</div>
			</div>
		)
	}
}
