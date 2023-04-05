import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckBoxEmptyComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.056 2.056C3.586.528 5.95 0 9.166 0c3.218 0 5.582.528 7.111 2.056 1.528 1.53 2.056 3.893 2.056 7.11 0 3.218-.528 5.582-2.056 7.111-1.529 1.53-3.893 2.056-7.11 2.056-3.218 0-5.583-.527-7.11-2.056C.527 14.748 0 12.384 0 9.167c0-3.218.527-5.582 2.056-7.11zm.972.973c-1.12 1.12-1.653 2.997-1.653 6.138 0 3.14.532 5.017 1.654 6.138 1.12 1.122 2.996 1.653 6.138 1.653 3.141 0 5.017-.531 6.138-1.653 1.12-1.121 1.653-2.997 1.653-6.138 0-3.142-.532-5.017-1.653-6.138-1.121-1.121-2.998-1.654-6.138-1.654-3.142 0-5.018.533-6.14 1.654z"
                fill="#0C9348"
            />
        </Svg>
    )
}

export default CheckBoxEmptyComponent
