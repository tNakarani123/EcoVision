import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ScanComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 11h20M1 7V4a3 3 0 013-3h3M21 15v3a3 3 0 01-3 3h-3M15 1h3a3 3 0 013 3v3M7 21H4a3 3 0 01-3-3v-3"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default ScanComponent
