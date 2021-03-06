/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import FastClick from 'fastclick'
import store from '@store'
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
	FastClick.attach(document.body)
}, false)

const rootElement = document.getElementById('root')

let counter = 0

const render = Component => {
	counter++
	ReactDOM.render(
		<AppContainer>
			<Component counter={counter} store={store} />
		</AppContainer>,
		rootElement
	)
}

if (module.hot && typeof module.hot.accept === 'function') {
	module.hot.accept('./app.jsx', () => {
		render(require('./app').default)
	})
}

render(App)
