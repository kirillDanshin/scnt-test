import React from 'react'
import CSSModules from 'react-css-modules'
import Heart from '@components/Heart/Heart'
import RatingLine from '@components/RatingLine/RatingLine'
import styles from './RatingInfo.pcss'

const calculateWidths = rating => {
	const max = Math.max(...rating)

	return rating.map(v => v / max * 100)
}

const RatingInfo = ({ rating }) => {
	const reversedRating = rating.reverse()
	const widths = calculateWidths(reversedRating)

	return (
		<div>
			{
				reversedRating.map((value, key) => (
					<div key={key} styleName="item">
						<span styleName="num">{5 - key}</span>
						<Heart active={value > 0} styleName="heart" />
						<div styleName="lineWrapper">
							<RatingLine width={widths[key]} />
						</div>
						<span styleName="value">{value}</span>
					</div>
				))
			}
		</div>
	)
}

export default CSSModules(RatingInfo, styles, { allowMultiple: true })
