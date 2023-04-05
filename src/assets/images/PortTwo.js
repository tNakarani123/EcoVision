import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

function PortTwoComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.095 21.72c4.839 0 8.595-4.782 8.595-10.454C17.69 5.593 13.934.81 9.095.81 4.257.81.5 5.593.5 11.266c0 5.672 3.757 10.455 8.595 10.455z"
                fill="#D9D9D9"
                stroke="#000"
            />
            <Ellipse
                cx={9.33334}
                cy={4.86616}
                rx={2.61905}
                ry={2.60725}
                fill="#000"
            />
            <Ellipse
                cx={9.33334}
                cy={18.1395}
                rx={2.61905}
                ry={2.60725}
                fill="#000"
            />
            <Ellipse
                cx={5.28573}
                cy={11.2657}
                rx={3.33333}
                ry={3.31832}
                fill="#000"
            />
            <Ellipse
                cx={12.9048}
                cy={11.2657}
                rx={3.33333}
                ry={3.31832}
                fill="#000"
            />
            <Ellipse
                cx={9.33333}
                cy={4.86602}
                rx={1.19048}
                ry={1.18511}
                fill="#D9D9D9"
            />
            <Ellipse
                cx={9.33333}
                cy={18.1393}
                rx={1.19048}
                ry={1.18511}
                fill="#D9D9D9"
            />
            <Ellipse
                cx={5.28572}
                cy={11.2658}
                rx={1.42857}
                ry={1.42214}
                fill="#D9D9D9"
            />
            <Ellipse
                cx={12.9048}
                cy={11.2658}
                rx={1.42857}
                ry={1.42214}
                fill="#D9D9D9"
            />
        </Svg>
    )
}

export default PortTwoComponent
