import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { getLink } from '@utils/cdn'
import Logo from '@components/Logo/Logo'
import styles from './Footer.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Footer extends Component {
	render() {
		const socials = ['fb', 'insta', 'pin', 'tumb', 'twi']

		const aboutLinks = ['About Us', 'For Bloggers', 'Affiliate Program',
			'For Press', 'Blog', 'Contact Us', 'Scentbird FAQs']

		const shopLinks = ['Shop', 'Send a Gift', 'Shop perfumes', 'Shop colognes']

		return (
			<footer styleName="footer">
				<div styleName="footerWrapper">
					<div styleName="top">
						<div styleName="logoAndMenu">
							<div>
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
							<div>
								<span styleName="title">About scentbird</span>
								<div styleName="line" />
								{
									aboutLinks.map((v, key) => (<a styleName="link" key={key}>{v}</a>))
								}
							</div>
							<div>
								<span styleName="title">Shop</span>
								<div styleName="line" />
								{
									shopLinks.map((v, key) => (<a styleName="link" key={key}>{v}</a>))
								}
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
					<div styleName="bottom">
						<div styleName="copyWrapper">
							<div>
							SCENTBIRD
							<i styleName="copy"></i>
							2015, All right reserved. Made with love in NYC.
							</div>
							<div styleName="bottomText">
								Privacy Policy
								<div styleName="dot" />
								Terms & Conditions
							</div>
						</div>
						<div>
							<img src={getLink('partners-logo.png')} alt="partners" />
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
