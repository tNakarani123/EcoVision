import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DieselComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.705 6.717L5.736 2.93l-2.97 3.785C1.924 7.866 1.2 8.957 1.2 10.34a4.537 4.537 0 004.537 4.537h.011a4.536 4.536 0 004.526-4.537c0-1.382-.724-2.472-1.568-3.622z"
                fill="#000"
                stroke="#B9B9B9"
                strokeWidth={0.5}
            />
            <Path
                d="M11.92 3.045L10.032.638 8.144 3.045C7.59 3.803 7.13 4.5 7.13 5.379c0 1.603 1.3 2.903 2.903 2.903h.008a2.902 2.902 0 002.895-2.903c0-.879-.46-1.576-1.015-2.334z"
                fill="#000"
                stroke="#B9B9B9"
                strokeWidth={0.5}
            />
        </Svg>
    )
}

export default DieselComponent
