import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AccountComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.5 17a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5H22V6c0-1.103-.897-2-2-2h-1V2c0-1.103-.897-2-2-2H3A2.998 2.998 0 00.051 2.499C.029 2.581 0 2.661 0 2.75V18c0 1.654 1.346 3 3 3h17c1.103 0 2-.897 2-2v-2h-2.5zM2 3c0-.551.448-1 1-1h14v2H3c-.552 0-1-.449-1-1z"
                fill="#000"
            />
            <Path
                d="M23.25 9.498H19.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h3.75a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm-3.75 4a1 1 0 110-2 1 1 0 010 2z"
                fill="#000"
            />
        </Svg>
    )
}

export default AccountComponent
