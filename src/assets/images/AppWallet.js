import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function AppWalletComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.9}>
                <Path
                    d="M1.083 7.667a3 3 0 013-3h9.834a3 3 0 013 3v5.666a3 3 0 01-3 3H4.083a3 3 0 01-3-3V7.667z"
                    fill="#000"
                    fillOpacity={0.8}
                />
                <Path
                    d="M12.544 1.934V4.28a1 1 0 01-1 1H4.315a2.518 2.518 0 00-2.48 2.08c-.013.076-.124.066-.124-.01v-.773a3 3 0 011.964-2.816L11.2.996a1 1 0 011.345.938z"
                    stroke="#000"
                    strokeOpacity={0.8}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                />
            </G>
        </Svg>
    )
}

export default AppWalletComponent
