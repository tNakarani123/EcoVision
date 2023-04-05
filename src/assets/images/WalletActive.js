import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function WalletActiveComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_291_21779)">
                <Path
                    d="M0 11.68a3 3 0 013-3h27a3 3 0 013 3v18.317a3 3 0 01-3 3H3a3 3 0 01-3-3V11.68z"
                    fill="#fff"
                />
                <Path
                    d="M23.886 1.433V8.96a1 1 0 01-1 1H5.69a4 4 0 00-3.94 3.304l-.243 1.382c-.022.12-.199.105-.199-.018v-4.235a3 3 0 011.965-2.816L22.542.494a1 1 0 011.344.939z"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_291_21779">
                    <Path fill="#fff" d="M0 0H33V33H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default WalletActiveComponent