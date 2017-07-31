import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import TopLine from './components/TopLine/TopLine'
import Heading from './components/Heading/Heading'
import Menu from './components/Menu/Menu'
import styles from './Header.pcss'

@cssModules(styles)
export default class Header extends Component {
	render() {
		return (
			<div>
				<TopLine />
				<Heading />
				<Menu />
			</div>
		)
	}
}
