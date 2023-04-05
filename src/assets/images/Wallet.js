import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function WalletComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_291_21748)">
                <Path
                    d="M0 8.261a3 3 0 013-3h14a3 3 0 013 3v8.737a3 3 0 01-3 3H3a3 3 0 01-3-3V8.261z"
                    fill="#fff"
                    fillOpacity={0.75}
                />
                <Path
                    d="M14.477 1.433v3.603a1 1 0 01-1 1H4.083A3.181 3.181 0 00.95 8.664c-.017.095-.158.083-.158-.014V7.124a3 3 0 011.965-2.816L13.132.494a1 1 0 011.345.939z"
                    stroke="#fff"
                    strokeOpacity={0.75}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_291_21748">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default WalletComponent

