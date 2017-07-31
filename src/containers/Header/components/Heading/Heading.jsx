import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import Logo from '@components/Logo/Logo'
import bird from './images/bird.gif'
import styles from './Heading.pcss'

@cssModules(styles)
export default class Heading extends Component {
	render() {
		return (
			<div styleName="heading">
				<div styleName="wrapper">
					<div styleName="search-container">
						<input styleName="search" placeholder="Search" />
					</div>

					<div>
						<Logo styleName="logo" />
					</div>

					<div>
						<img styleName="bird" alt="Get free parfume" src={bird} />
					</div>
				</div>
			</div>
		)
	}
}
