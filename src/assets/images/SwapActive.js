import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SwapActiveComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33 27a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6h21a6 6 0 016 6v21zm-6.84-12.563a.75.75 0 00-.75-.75H8.946a.25.25 0 01-.18-.423L13.08 8.77a.75.75 0 00-1.082-1.038l-4.315 4.495c-1.068 1.112-.28 2.961 1.262 2.961H25.41a.75.75 0 00.75-.75zM7.59 19.314a.75.75 0 010-1.5h16.464c1.542 0 2.33 1.85 1.262 2.961l-4.315 4.495a.75.75 0 11-1.082-1.038l4.315-4.495a.25.25 0 00-.18-.424H7.59z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SwapActiveComponent
