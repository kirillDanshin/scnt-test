import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import Logo from '@components/Logo/Logo'
import Search from '../Search/Search'
import bird from './images/bird.gif'
import styles from './Heading.pcss'

@cssModules(styles)
export default class Heading extends Component {
	render() {
		const { className } = this.props

		return (
			<div className={className} styleName="heading">
				<div styleName="wrapper">
					<Search />
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
