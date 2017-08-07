import styled from 'styled-components'
import { tabletMax } from '@stylevars'

export default styled.hr`
	max-width: 1040px;
	margin: 30px auto;
	border: none;
	height: 1px;
	background-color: #dee2e7;

	@media (max-width: ${tabletMax}) {
		background-color: #e6e6e6;
		margin: 30px 18px;
	}
`
