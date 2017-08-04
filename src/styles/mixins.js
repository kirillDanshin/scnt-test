module.exports = {
	maxWidth: {
		'max-width': '1080px',
		'padding-left': '20px',
		'padding-right': '20px',
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

	easeOutAll: {
		transition: 'all 150ms ease-out 0s',
	},
}
