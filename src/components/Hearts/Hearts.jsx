import React from 'react'
import CSSModules from 'react-css-modules'
import cx from 'classnames'
import styles from './Hearts.pcss'

const Hearts = ({ count = 0 }) => (
	<div>
		{
			[1, 2, 3, 4, 5].map(item => {
				const className = cx('heart', {
					first: item === 1,
					last: item === 5,
					active: item <= count,
				})

				return <i key={item} styleName={className}></i>
			})
		}
	</div>
)

export default CSSModules(Hearts, styles, { allowMultiple: true })
