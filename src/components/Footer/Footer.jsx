import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { getLink } from '@utils/cdn'
import Logo from '@components/Logo/Logo'
import styles from './Footer.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Footer extends Component {
	state = {
		dropdownsState: {},
	}

	toggleDropdown = name => () => {
		const dropState = this.state.dropdownsState

		this.setState({
			dropdownsState: {
				...dropState,
				[name]: !dropState[name],
			},
		})
	}

	dropdownsState = name => !!this.state.dropdownsState[name]

	render() {
		const socials = ['fb', 'insta', 'pin', 'tumb', 'twi']

		const aboutLinks = ['About Us', 'For Bloggers', 'Affiliate Program',
			'For Press', 'Blog', 'Contact Us', 'Scentbird FAQs']

		const shopLinks = ['Shop', 'Send a Gift', 'Shop perfumes', 'Shop colognes']

		const aboutDropdownCx = `mobileDropdownContent ${this.dropdownsState('about') ? 'opened' : ''}`
		const shopDropdownCx = `mobileDropdownContent ${this.dropdownsState('shop') ? 'opened' : ''}`

		return (
			<footer styleName="container">
				<div styleName="wrapper">
					<div styleName="top">
						<div styleName="logoAndMenu">
							<div styleName="desktopAbout">
								<div styleName="logoWrapper">
									<Logo light />
								</div>
								<div styleName="description">
									Discover a new perfume
									<br />
									every month for $14.95
								</div>
								<a href="mailto://support@scentbird.com" styleName="mailto">
									support@scentbird.com
								</a>
							</div>
							<div styleName={`mobileDropdown ${this.dropdownsState('about') ? 'opened' : ''}`}>
								<span styleName="title" onClick={this.toggleDropdown('about')}>
									About scentbird
								</span>
								<div styleName="line" />
								<div styleName={aboutDropdownCx}>
									{
										aboutLinks.map((v, key) => (<a styleName="link" key={key}>{v}</a>))
									}
								</div>
							</div>
							<div styleName={`mobileDropdown ${this.dropdownsState('shop') ? 'opened' : ''}`}>
								<span styleName="title" onClick={this.toggleDropdown('shop')}>
									Shop
								</span>
								<div styleName="line" />
								<div styleName={shopDropdownCx}>
									{
										shopLinks.map((v, key) => (<a styleName="link" key={key}>{v}</a>))
									}
								</div>
							</div>
						</div>
						<div styleName="followAndSubscribe">
							<div>
								<span styleName="title">Follow us</span>
								<div styleName="line" />
								<div styleName="socialIcons">
									{
										socials.map((v, key) => (
											<a styleName="socialLink" key={key}>
												<img
													src={getLink(`socials/${v}.svg`)}
													alt={v}
													/>
											</a>
										))
									}
								</div>
								<div styleName="subscribe">
									<span styleName="title">Subscribe</span>
									<div styleName="subscribeWrapper">
										<input
											styleName="subscribeInput"
											placeholder="Enter email address"
											/>
										<div styleName="arrowWrapper">
											<i styleName="arrow"></i>
										</div>
									</div>
									<div styleName="signUp">
										<a styleName="signUpLink">Sign up </a>
										to  get the latest updates on sales
									</div>
								</div>
							</div>
						</div>
					</div>
					<div styleName="bottom">
						<a styleName="mobileOnly invite">INVITE FRIENDS AND EARN</a>
						<div styleName="copyWrapper">
							<div>
							SCENTBIRD
							<i styleName="copy"></i>
							2015, All right reserved. <br styleName="mobileOnly" />Made with love in NYC.
							</div>
							<div styleName="bottomText">
								Privacy Policy
								<div styleName="dot" />
								Terms & Conditions
							</div>
						</div>
						<div styleName="partners">
							<img src={getLink('partners-logo.png')} alt="partners" />
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
