import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import cssModules from 'react-css-modules'
import actions from '@actions'
import styles from './General.scss'

@connect({
	name: 'hello.name',
})
@cssModules(styles)
export default class General extends Component {
	update(e) {
		actions.hello.setName(e.target.value)
	}

	render() {
		const { name } = this.props

		return (
			<div styleName="hello-container">
				<p styleName="hello">
					Hello{name ? `, ${name}` : ''}!
				</p>
				<div>
					<input onChange={this.update} placeholder="Enter your name" />
				</div>
			</div>
		)
	}
}
