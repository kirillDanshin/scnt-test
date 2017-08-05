import React from 'react'
import CSSModules from 'react-css-modules'
import Heart from '@components/Heart/Heart'
import styles from './RatingInfo.pcss'

const calculateWidths = rating => {
	const max = rating.reduce((p, v) => (p > v ? p : v))

	return rating.map(v => v / max * 100)
}

const RatingInfo = ({ rating }) => {
	const widths = calculateWidths(rating)

	return (
		<div>
			{
				rating.map((value, key) => (
					<div key={key}>
						<span>{key + 1}</span>
						<Heart active={value > 0} />
						<div
							styleName="line"
							style={{
								width: widths[key],
							}}
							/>
						<span>{value}</span>
					</div>
				))
			}
		</div>
	)
}

export default CSSModules(RatingInfo, styles, { allowMultiple: true })
