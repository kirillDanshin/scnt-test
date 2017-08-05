import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import styles from './Rates.pcss'

@connect({
	rates: 'product.rates',
})
@cssModules(styles, { allowMultiple: true })
export default class Rates extends Component {
	render() {
		const { rates } = this.props

		return (
			<div styleName="container">
				<h2 styleName="title">Rate this Perfume</h2>

				<div styleName="rates">
					{
						rates.map(({ name, iconLink, choise, votes }, idx) => (
							<div key={idx} styleName={`rate ${idx >= 5 ? 'mobileOnly' : ''}`}>
								<h3 styleName="choiseName">{name}</h3>
								<div styleName="iconContainer">
									<img src={iconLink} alt={choise} />
								</div>
								<p>{choise}</p>
								<p styleName="votes">{votes} voted</p>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}
