import styled from 'styled-components'

export default styled.div`
	display: inline-block;
	background-color: ${({ color }) => (color || '#dadada')};
	width: ${({ width = 0 }) => width}%;
	height: ${({ height = 15 }) => height}px;
`
