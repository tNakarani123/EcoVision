import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function GPSComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={14}
                cy={14}
                r={13.5}
                fill="#1B59FA"
                fillOpacity={0.1}
                stroke="#1B59FA"
            />
            <Circle cx={14} cy={14} r={7} fill="#1B59FA" />
        </Svg>
    )
}

export default GPSComponent
