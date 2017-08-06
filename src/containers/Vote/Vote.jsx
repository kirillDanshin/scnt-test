import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import actions from '@actions'
import styles from './Vote.pcss'

@connect({
	longevityOpinion: 'product.votes.longevity.opinion',
	longevityAvg: 'product.votes.longevity.avg',
	sillageOpinion: 'product.votes.sillage.opinion',
	sillageAvg: 'product.votes.sillage.avg',
})
@cssModules(styles)
export default class Vote extends Component {
	getLongevityText = v => {
		switch (true) {
		case v < 20:
			return 'Longevity? Huh?'
		case v < 40:
			return 'I want more'
		case v < 60:
			return 'Cool'
		case v < 90:
			return 'Strong'
		default:
			return 'Stays about a year'
		}
	}

	getSillageText = v => {
		switch (true) {
		case v < 20:
			return "Didn't even notice"
		case v < 40:
			return 'Light'
		case v < 60:
			return 'Strong'
		case v < 90:
			return 'Heavy'
		default:
			return 'Cockroaches died, thanks'
		}
	}

	handleChange = type => v => {
		let opinionText
		if (type === 'longevity') {
			opinionText = this.getLongevityText(v)
		}
		if (type === 'sillage') {
			opinionText = this.getSillageText(v)
		}
		actions.product.vote(type, opinionText, v)
	}

	render() {
		const { longevityOpinion, longevityAvg, sillageOpinion, sillageAvg } = this.props

		let longevityText = longevityAvg.get('text')
		if (longevityText) {
			longevityText += ` (${longevityAvg.get('votes')})`
		} else {
			longevityText = "Havn't voted yet"
		}

		let sillageText = sillageAvg.get('text')
		if (sillageText) {
			sillageText += `(${sillageAvg.get('votes')})`
		} else {
			sillageText = "Havn't voted yet"
		}

		return (
			<div styleName="container">
				<div styleName="wrapper">
					<div styleName="vote">
						<h3 styleName="title">Longevity</h3>
						<div styleName="sliderContainer">
							<p styleName="selection">Drag to vote</p>
							<Slider
								onChange={this.handleChange('longevity')}
								value={longevityOpinion.get('percent') || 20}
								/>
						</div>
						<p styleName="voteResult">
							You say: <span>{longevityOpinion.get('text') || "Havn't voted yet" }</span>
						</p>
						<p styleName="voteResult">People say: {longevityText}</p>
					</div>

					<div styleName="vote">
						<h3 styleName="title">Sillage</h3>
						<div styleName="sliderContainer">
							<p styleName="selection">Drag to vote</p>
							<Slider
								onChange={this.handleChange('sillage')}
								value={sillageOpinion.get('percent') || 20}
								/>
						</div>
						<p styleName="voteResult">
							You say: <span>{sillageOpinion.get('text') || "Havn't voted yet" }</span>
						</p>
						<p styleName="voteResult">People say: {sillageText}</p>
					</div>
				</div>
			</div>
		)
	}
}
