import * as React from "react"
import Svg, { Ellipse, Circle } from "react-native-svg"

function RuserComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 42 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse
                cx={20.8108}
                cy={35.8648}
                rx={20.4324}
                ry={14.3784}
                fill="#F8F4ED"
            />
            <Circle cx={20.8108} cy={9.75674} r={9.08108} fill="#F8F4ED" />
        </Svg>
    )
}

export default RuserComponent
