import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import styles from './Notes.pcss'

@connect({
	title: 'product.title',
	notes: 'product.notes',
})
@cssModules(styles)
export default class Notes extends Component {
	render() {
		const { className, notes, title } = this.props

		return (
			<div className={className} styleName="container">
				<h2 styleName="title">
					<span>{title}</span> Main Notes
				</h2>

				<div styleName="notes">
					{
						notes.map((link, idx) => <img key={idx} alt="main notes" src={link} />)
					}
				</div>
			</div>
		)
	}
}
