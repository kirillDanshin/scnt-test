import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import actions from '@actions'
import styles from './Options.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Options extends Component {
	static propTypes = {
		options: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				preview: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
			})
		).isRequired,
		selectedOptionIdx: PropTypes.number,
	}

	selectOption = idx => () => actions.product.selectOptionIdx(idx)

	render() {
		const { options, selectedOptionIdx } = this.props

		return (
			<div styleName="options">
				{options.map((v, idx) => (
					<div
						key={idx}
						styleName={`option ${idx === selectedOptionIdx ? 'selected' : ''}`}
						onClick={this.selectOption(idx)}>
						<img styleName="preview" src={v.preview} alt={v.name} />
						<span styleName="name">{v.name}</span>
					</div>
				))}
			</div>
		)
	}
}
