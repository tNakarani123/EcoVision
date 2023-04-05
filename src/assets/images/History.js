import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HistoryComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 17.333A8.333 8.333 0 109 .666a8.333 8.333 0 000 16.667zm.75-14.166a.75.75 0 00-1.5 0v5.3c0 .471.254.906.666 1.137l3.05 1.716a.75.75 0 10.735-1.307L9.75 8.353V3.167z"
                fill="#000"
                fillOpacity={0.8}
            />
        </Svg>
    )
}

export default HistoryComponent
