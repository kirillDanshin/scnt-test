import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import { getLink } from '@utils/cdn'
import Hearts from '@components/Hearts/Hearts'
import Reaction from '../Reaction/Reaction'
import styles from './Review.pcss'

@cssModules(styles)
export default class Review extends Component {
	static propTypes = {
		reviewIdx: PropTypes.number,
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		ratingCount: PropTypes.number,
		date: PropTypes.instanceOf(Date),
		text: PropTypes.string,
		icons: PropTypes.array,
		likes: PropTypes.number,
		dislikes: PropTypes.number,
	}

	render() {
		const {
			reviewIdx,
			name,
			avatar,
			ratingCount,
			date,
			text,
			icons,
			likes,
			dislikes,
		} = this.props

		const normolizeDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

		return (
			<div styleName="review">
				<div styleName="user">
					<img src={avatar || getLink('face.png')} alt={name} styleName="avatar" />
					<div styleName="name">{name}</div>
				</div>
				<div>
					<div styleName="ratingAndDate">
						<Hearts count={ratingCount} />
						<span styleName="date">{normolizeDate}</span>
					</div>
					<p styleName="text">{text}</p>
					<div styleName="icons">
						{
							icons.map((icon, key) => (
								<div styleName="iconWrapper" key={key}>
									<img src={icon} alt="icon" />
								</div>
							))
						}
					</div>
					<div styleName="reactionWrapper">
						<span styleName="reactionText">Was this review helpful</span>
						<Reaction likes={likes} dislikes={dislikes} reviewIdx={reviewIdx} />
					</div>
				</div>
			</div>
		)
	}
}
