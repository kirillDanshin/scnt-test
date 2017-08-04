import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import Header from '@containers/Header/Header'
import Product from '@containers/Product/Product'
import Notes from '@containers/Notes/Notes'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import styles from './General.pcss'

@cssModules(styles)
export default class General extends Component {
	render() {
		const crumbs = [
			{
				name: 'Perfumes',
				link: '#',
			},
			{
				name: 'Cartier',
				link: '#',
			},
			{
				name: 'Eau de Cartier Essence de Bois',
			},
		]

		return (
			<div>
				<Header />
				<Breadcrumbs crumbs={crumbs} />

				<Product />

				<Notes />
			</div>
		)
	}
}
