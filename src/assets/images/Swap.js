import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SwapComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_291_21711)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 14a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6h8a6 6 0 016 6v8zm-3.85-5.25A.75.75 0 0015.4 8H6.346a.25.25 0 01-.18-.423L8.14 5.519a.75.75 0 10-1.082-1.038L5.084 6.538C4.016 7.65 4.804 9.5 6.346 9.5H15.4a.75.75 0 00.75-.75zM4.6 12a.75.75 0 010-1.5h9.054c1.542 0 2.33 1.85 1.262 2.962l-1.975 2.057a.75.75 0 01-1.082-1.038l1.975-2.058a.25.25 0 00-.18-.423H4.6z"
                    fill="#fff"
                    fillOpacity={0.75}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_291_21711">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SwapComponent
