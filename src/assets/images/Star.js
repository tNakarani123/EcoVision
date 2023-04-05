import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5 .432l1.123 3.44h3.632L6.816 5.997l1.123 3.44L5 7.31 2.061 9.437l1.123-3.44-2.94-2.125h3.633L5 .432z"
                fill="#FFCD00"
            />
        </Svg>
    )
}

export default StarComponent
