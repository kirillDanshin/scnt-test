import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import cssModules from 'react-css-modules'
import Logo from '@components/Logo/Logo'
import cx from 'classnames'
import styles from './TopLine.pcss'
import profileIcon from './images/profile.svg'
import cartIcon from './images/cart.svg'
import blackCartIcon from './images/cart-black.svg'

@connect({
	name: 'user.name',
	count: 'cart.items.count',
})
@cssModules(styles, { allowMultiple: true })
export default class TopLine extends Component {
	state = {
		dropdownOpened: false,
	}

	componentDidMount() {
		window.addEventListener('keydown', this.maybeCloseDropdown)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.maybeCloseDropdown)
	}

	maybeCloseDropdown = e => {
		// 27 === esc
		if (e.keyCode === 27 && this.state.dropdownOpened) {
			this.toggleDropdown()
		}
	}

	forceCloseDropdown = () => {
		this.setState({
			dropdownOpened: false,
		})
	}

	toggleDropdown = () => {
		this.setState({
			dropdownOpened: !this.state.dropdownOpened,
		})
	}

	render() {
		const { name, count } = this.props
		const { dropdownOpened } = this.state

		const dropdownSx = cx('dropdown', {
			opened: dropdownOpened,
		})

		return (
			<div styleName="topLine">
				<div styleName="wrapper">
					<nav styleName="left">
						<a>Wall of love</a>
						<a>Send a gift</a>
					</nav>

					<div styleName="right">
						<div styleName="profileContainer">
							<img alt="profile" src={profileIcon} />
							{name}
						</div>
						<div styleName="cartContainer">
							<img alt="cart" src={cartIcon} />
							<a>Cart (<span styleName="count">{count}</span>)</a>
						</div>
					</div>
				</div>

				<div styleName="mobile">
					<div styleName="toggleArea" onClick={this.toggleDropdown}>
						<div styleName="toggle" />
					</div>
					<Logo styleName="logo" />
					<div styleName="cartContainer">
						<img styleName="cart" alt="cart" src={blackCartIcon} />
						<a>(<span styleName="count">{count}</span>)</a>
					</div>
					<nav styleName={dropdownSx}>
						<a>Wall of love</a>
						<a>Send a gift</a>
						<a>Get free parfum</a>
						<a>Account</a>
					</nav>
					{
						dropdownOpened && (
							<div styleName="dropdownCloseArea" onClick={this.forceCloseDropdown} />
						)
					}
				</div>
			</div>
		)
	}
}
