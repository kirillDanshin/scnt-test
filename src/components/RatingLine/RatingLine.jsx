import styled from 'styled-components'

export default styled.div`
	display: inline-block;
	background-color: ${({ color = '#dadada' }) => color};
	width: ${({ width = 0 }) => width}%;
	height: ${({ height = 15 }) => height}px;
`
