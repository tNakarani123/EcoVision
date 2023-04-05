import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function NotificationComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.5 3a2.5 2.5 0 015 0h-5zM6.25 21.75a3.75 3.75 0 107.5 0h-7.5zM2.5 9.806A5.556 5.556 0 018.056 4.25h3.888A5.556 5.556 0 0117.5 9.806v6.944h-15V9.806z"
                fill="#000"
            />
            <Rect y={18} width={20} height={2.5} rx={1.25} fill="#000" />
        </Svg>
    )
}

export default NotificationComponent
