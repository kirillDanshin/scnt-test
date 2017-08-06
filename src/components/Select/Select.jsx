import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'
import cx from 'classnames'
import styles from './Select.pcss'

@cssModules(styles, { allowMultiple: true })
export default class Select extends Component {
	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string).isRequired,
		className: PropTypes.string,
	}

	state = {
		selectedIdx: 0,
		showOptions: false,
	}

	toggle = () => {
		this.setState({
			showOptions: !this.state.showOptions,
		})
	}

	select = idx => () => {
		this.setState({
			selectedIdx: idx,
			showOptions: false,
		})
	}

	render() {
		const { options, className } = this.props
		const { selectedIdx, showOptions } = this.state
		const selectedOption = options[selectedIdx]

		const optionsStyleName = cx('options', {
			show: showOptions,
		})

		const arrowIconStyleName = cx('arrowIcon', {
			showOptions,
		})

		return (
			<div styleName="container" className={className}>
				<div styleName="selectedWrapper" onClick={this.toggle}>
					{selectedOption}
					<div styleName="arrowContainer">
						<i styleName={arrowIconStyleName}></i>
					</div>
				</div>
				<div styleName={optionsStyleName}>
					{
						options.map((option, idx) => (
							<div key={idx} styleName="option" onClick={this.select(idx)}>{option}</div>
						))
					}
				</div>
			</div>
		)
	}
}
