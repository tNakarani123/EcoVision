import * as React from "react"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"

function LinearComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 390 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                width={390}
                height={238}
                rx={10}
                fill="url(#paint0_linear_230_10821)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_230_10821"
                    x1={230.5}
                    y1={-76.5}
                    x2={258.153}
                    y2={464.986}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#093" />
                    <Stop offset={1} stopColor="#093" stopOpacity={0} />
                    <Stop offset={1} stopColor="#093" stopOpacity={0} />
                    <Stop offset={1} stopColor="#115828" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default LinearComponent
