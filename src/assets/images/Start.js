import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StartComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.073 4.54L13.563.379a.838.838 0 011.06 1.06l-4.164 12.489c-.236.708-1.21.777-1.544.11L6.618 9.443 9.78 6.28a.75.75 0 00-1.06-1.06L5.557 8.382.963 6.085c-.667-.334-.598-1.308.11-1.544z"
                fill="#FAFAFA"
            />
        </Svg>
    )
}

export default StartComponent
