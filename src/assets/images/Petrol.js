import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PetrolComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.716 6.774l-2.518-3.21-2.519 3.21C.956 7.76.342 8.687.342 9.86a3.855 3.855 0 003.856 3.855h.011A3.855 3.855 0 008.053 9.86c0-1.173-.613-2.1-1.337-3.086z"
                fill="#94791C"
                stroke="#000"
                strokeWidth={0.5}
            />
            <Path
                d="M9.473 3.625l-1.59-2.028-1.591 2.028c-.477.65-.864 1.24-.864 1.98A2.454 2.454 0 007.882 8.06h.009a2.454 2.454 0 002.445-2.453c0-.741-.386-1.33-.863-1.981z"
                fill="#94791C"
                stroke="#000"
                strokeWidth={0.5}
            />
        </Svg>
    )
}

export default PetrolComponent
