import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import TopLine from './components/TopLine/TopLine'
import Heading from './components/Heading/Heading'
import Menu from './components/Menu/Menu'
import Search from './components/Search/Search'
import styles from './Header.pcss'

@cssModules(styles)
export default class Header extends Component {
	render() {
		return (
			<div>
				<TopLine />
				<Heading styleName="heading" />
				<Menu />
				<div styleName="mobileOnly">
					<Search styleName="search" />
				</div>
			</div>
		)
	}
}
