import React from 'react'
import CSSModules from 'react-css-modules'
import Heart from '@components/Heart/Heart'
import RatingLine from '@components/RatingLine/RatingLine'
import { brandColor } from '@stylevars'
import styles from './RatingInfo.pcss'

const calculateWidths = rating => {
	const max = Math.max(...rating)

	return rating.map(v => v / max * 100)
}

const RatingInfo = ({ rating, small: isSmall, activeLineIdx }) => {
	const reversedRating = [...rating].reverse()
	const widths = calculateWidths(reversedRating)

	return (
		<div>
			{
				reversedRating.map((value, key) => (
					<div key={key} styleName={`item ${isSmall ? 'small' : ''}`}>
						<span styleName="num">{5 - key}</span>
						<Heart active={value > 0} styleName="heart" />
						<div styleName="lineWrapper">
							<RatingLine
								width={widths[key]}
								height={isSmall && 8}
								color={(activeLineIdx === 5 - key) && brandColor}
								/>
						</div>
						<span styleName="value">{value}</span>
					</div>
				))
			}
		</div>
	)
}

export default CSSModules(RatingInfo, styles, { allowMultiple: true })
