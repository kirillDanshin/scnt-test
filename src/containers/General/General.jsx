import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import Header from '@containers/Header/Header'
import Product from '@containers/Product/Product'
import styles from './General.pcss'

@cssModules(styles)
export default class General extends Component {
	render() {
		return (
			<div>
				<Header />
				<Product />
			</div>
		)
	}
}
