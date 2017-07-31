module.exports = {
	maxWidth: {
		'max-width': '1080px',
		padding: '0 20px',
	},

	placeholderColor(mixin, color) {
		return {
			'&::-webkit-input-placeholder': {
				color,
				opacity: 1,
			},

			'&::-moz-placeholder': {
				color,
				opacity: 1,
			},

			'&:-moz-placeholder': {
				color,
				opacity: 1,
			},

			'&:-ms-input-placeholder': {
				color,
				opacity: 1,
			},
		}
	},

	transitionAll: {
		transition: 'all 150ms ease-in-out 0s',
	},
}
