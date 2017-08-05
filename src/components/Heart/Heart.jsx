import React from 'react'
import CSSModules from 'react-css-modules'
import cx from 'classnames'
import styles from './Heart.pcss'

const Heart = ({ active, className }) => {
	const styleName = cx('heart', {
		active,
	})

	return <i styleName={styleName} className={className}></i>
}

export default CSSModules(Heart, styles, { allowMultiple: true })
