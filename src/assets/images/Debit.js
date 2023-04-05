import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DebitComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 34 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.505 0H2.495A2.498 2.498 0 000 2.495v18.01A2.498 2.498 0 002.495 23h29.01A2.498 2.498 0 0034 20.505V2.495A2.498 2.498 0 0031.505 0zM10.459 14.976h3.37a.732.732 0 110 1.464h-3.37a.732.732 0 110-1.464zM3.166 7.632c0-.404.328-.732.732-.732h4.386c.405 0 .733.328.733.732v3.171a.732.732 0 01-.733.732H3.898a.732.732 0 01-.732-.732v-3.17zm.732 7.344h3.37a.732.732 0 110 1.464h-3.37a.732.732 0 110-1.464zm12.033 4.72H3.898a.732.732 0 110-1.464h12.033a.732.732 0 110 1.464zm4.459-3.256h-3.37a.732.732 0 110-1.464h3.37a.732.732 0 110 1.464zm6.56 0h-3.37a.732.732 0 110-1.464h3.37a.732.732 0 110 1.464zm3.152-10.695h-7.95a.732.732 0 110-1.464h7.95a.732.732 0 110 1.464z"
                fill="#5E5E5E"
            />
        </Svg>
    )
}

export default DebitComponent