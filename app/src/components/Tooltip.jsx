import TooltipReact from "react-simple-tooltip"
import { css } from "styled-components"

export default function Tooltip (props) {
	return (
		<TooltipReact 
			content={props.content}
			customCss={css`
				white-space: nowrap;
				font-size: 0.8rem;
				font-weight: bold;
			`}
			//background="#333e"
			offset={10}
			border="transparent"
			padding={10}
			radius={6}
			>
			{props.children}
		</TooltipReact>
	)
}