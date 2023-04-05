import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SavedComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={15} cy={15} r={15} fill="#fff" />
            <Path
                d="M9.167 8.666a2 2 0 012-2h7.666a2 2 0 012 2v11.562c0 1.255-1.45 1.955-2.432 1.175l-2.469-1.96a1.5 1.5 0 00-1.864 0l-2.469 1.96c-.983.78-2.432.08-2.432-1.175V8.666z"
                fill="#0C9348"
            />
        </Svg>
    )
}

export default SavedComponent
