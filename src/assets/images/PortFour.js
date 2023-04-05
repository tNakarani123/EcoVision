import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PortFourComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.5 22.72c6.073 0 11-4.9 11-10.952 0-6.051-4.927-10.953-11-10.953S.5 5.717.5 11.768c0 6.051 4.927 10.953 11 10.953z"
                fill="#D9D9D9"
                stroke="#000"
            />
            <Path fill="#000" d="M4 8.78149H6V14.75446H4z" />
            <Path fill="#000" d="M10.5 3.80408H12.5V9.77705H10.5z" />
            <Path fill="#000" d="M17 8.78149H19V14.75446H17z" />
            <Path d="M8.5 14.02a2.75 2.75 0 115.5 0v4.716H8.5V14.02z" fill="#000" />
        </Svg>
    )
}

export default PortFourComponent
