import styled from 'styled-components'
import { brandColor, buttonHoverColor, mobileMax } from '@stylevars'

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
	padding: ${({ bigPadding }) => (
		bigPadding ? '17px 85px' : '15px 43px'
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

	@media (max-width: ${mobileMax}) {
		width: 100%;
		padding: ${({ bigPadding }) => bigPadding ? '17px 43px' : '15px 43px'};
	}
`
