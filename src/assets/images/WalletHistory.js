import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WalletHistoryComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.914 0a12.417 12.417 0 00-11.97 9.344l-.832-1.258a1.136 1.136 0 10-1.896 1.25l2.5 3.789c.174.243.43.414.72.483.298.059.606 0 .86-.165l3.75-2.526a1.137 1.137 0 10-1.267-1.885l-1.706 1.15a10.124 10.124 0 119.84 12.545 10.104 10.104 0 01-8.273-4.343 1.138 1.138 0 10-1.864 1.299A12.365 12.365 0 0027.3 12.5 12.458 12.458 0 0014.914 0z"
                fill="#404040"
            />
            <Path
                d="M14.8 5.625a1.136 1.136 0 00-1.136 1.136V12.5c.005.3.124.588.333.803l3.409 3.44a1.15 1.15 0 001.607.008 1.137 1.137 0 00.006-1.607l-3.083-3.111V6.76A1.136 1.136 0 0014.8 5.625z"
                fill="#404040"
            />
        </Svg>
    )
}

export default WalletHistoryComponent
