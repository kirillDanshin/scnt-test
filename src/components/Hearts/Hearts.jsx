import React from 'react'
import CSSModules from 'react-css-modules'
import Heart from '@components/Heart/Heart'
import styles from './Hearts.pcss'

const Hearts = ({ count = 0 }) => (
	<div>
		{
			[1, 2, 3, 4, 5].map(item => {
				const isActive = item <= count
				
				let styleName = ''
				if (item === 1) {
					styleName = 'first'
				}
				if (item === 5) {
					styleName = 'last'
				}

				return <Heart key={item} active={isActive} styleName={styleName} />
			})
		}
	</div>
)

export default CSSModules(Hearts, styles, { allowMultiple: true })
