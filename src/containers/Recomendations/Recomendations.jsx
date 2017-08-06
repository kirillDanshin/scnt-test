import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import { connect } from 'redaction/immutable'
import styles from './Recomendations.pcss'

@connect({
})
@cssModules(styles)
export default class Recomendations extends Component {
	render() {
		return (
			<div styleName="container">

			</div>
		)
	}
}
