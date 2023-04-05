import * as React from "react"
import Svg, { Ellipse, Defs, LinearGradient, Stop } from "react-native-svg"

function SlotComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse
                cx={4}
                cy={4.61711}
                rx={4}
                ry={3.98198}
                fill="url(#paint0_linear_98_1508)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_98_1508"
                    x1={-1}
                    y1={1.63063}
                    x2={10.4633}
                    y2={10.1418}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#0C9348" />
                    <Stop offset={1} stopColor="#0C9348" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SlotComponent
