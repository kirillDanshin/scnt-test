import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import Header from '@containers/Header/Header'
import Product from '@containers/Product/Product'
import Notes from '@containers/Notes/Notes'
import Rates from '@containers/Rates/Rates'
import Vote from '@containers/Vote/Vote'
import Reviews from '@containers/Reviews/Reviews'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Footer from '@components/Footer/Footer'
import Hr from '@components/Hr/Hr'
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
				<Rates />

				<Hr />

				<Vote />

				<Hr />

				<Reviews />

				<Footer />
			</div>
		)
	}
}
