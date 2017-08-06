import React from 'react'
import dark from './images/logo.svg'
import light from './images/logo_light.svg'

const Logo = props => (
	<img className={props.className} alt="Scentbird" src={props.light ? light : dark} />
)

export default Logo
