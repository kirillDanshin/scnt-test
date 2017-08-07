import styled from 'styled-components'
import { brandColor, buttonHoverColor } from '@stylevars'

/* eslint-disable no-confusing-arrow */

export default styled.button`
	background: none;
	border: none;
	box-shadow: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
	border-radius: 0;
	cursor: pointer;

	background-color: ${brandColor};
	padding: ${({ verticalPadding, horizontalPadding }) => (
		`${verticalPadding || 15}px ${horizontalPadding || 43}px`
	)};
	color: #fff;
	font-size: ${({ fontSize }) => fontSize || 16}px;
	font-weight: ${({ bold }) => bold ? 700 : 400};
	text-transform: uppercase;
	transition: all 150ms ease-in-out 0s;

	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	&:hover {
		background-color: ${buttonHoverColor};
	}
`
