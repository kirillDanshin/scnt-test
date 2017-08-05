import styled from 'styled-components'
import { brandColor } from '@stylevars'

export default styled.i`
	color: ${({ active }) => (active ? brandColor : '#dadada')};
	font-family: "FontAwesome";
	font-style: normal;
	font-size: 14px;
	margin: 0 3px;
	cursor: default;

	&:before {
		content: "\f004";
	}
`
