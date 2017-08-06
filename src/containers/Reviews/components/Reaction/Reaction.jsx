import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import cx from 'classnames'
import actions from '@actions'
import { getLink } from '@utils/cdn'
import styles from './Reaction.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Reaction extends Component {
	static propTypes = {
		reviewIdx: PropTypes.number,
		likes: PropTypes.number,
		dislikes: PropTypes.number,
	}

	state = {
		isLike: false,
		isDislike: false,
	}

	like = () => {
		const { reviewIdx } = this.props
		const { isDislike, isLike } = this.state

		if (isDislike) {
			actions.reviews.dislikesDec(reviewIdx)
		}
		if (!isLike) {
			actions.reviews.likesInc(reviewIdx)
		}

		this.setState({
			isLike: true,
			isDislike: false,
		})
	}

	dislike = () => {
		const { reviewIdx } = this.props
		const { isLike, isDislike } = this.state

		if (isLike) {
			actions.reviews.likesDec(reviewIdx)
		}
		if (!isDislike) {
			actions.reviews.dislikesInc(reviewIdx)
		}

		this.setState({
			isLike: false,
			isDislike: true,
		})
	}

	render() {
		const { likes, dislikes } = this.props
		const { isLike, isDislike } = this.state
		const isLikes = !!likes
		const isDislikes = !!dislikes

		const likeReactionStyleName = cx('reaction', {
			empty: !isLikes,
			active: isLike,
		})
		const dislikeReactionStyleName = cx('reaction', {
			empty: !isDislikes,
			active: isDislike,
		})

		return (
			<div styleName="container">
				<div styleName={likeReactionStyleName} onClick={this.like}>
					<img src={getLink('hand.svg')} alt="like" />
					{isLikes ? <span styleName="count">{likes}</span> : null}
				</div>

				<div styleName={dislikeReactionStyleName} onClick={this.dislike}>
					<img src={getLink('hand.svg')} alt="dislike" styleName="dislikeIcon" />
					{isDislikes ? <span styleName="count">{dislikes}</span> : null}
				</div>
			</div>
		)
	}
}
