import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function AlertComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 168 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={84} cy={78.9} r={60} fill="#2F5284" />
            <Circle cx={84} cy={79} r={50} fill="#C4D7F2" />
            <Path
                d="M81.75 49.474L62.306 58.03c-2 .88-3.306 2.861-3.306 5.034v12.928C59 91.258 69.667 105.534 84 109c14.333-3.466 25-17.742 25-33.009V63.063c0-2.173-1.306-4.154-3.306-5.034L86.25 49.474a5.572 5.572 0 00-4.5 0zm-5.278 41.069l-7.194-7.125a2.74 2.74 0 01-.811-1.939 2.719 2.719 0 01.81-1.94 2.772 2.772 0 011.96-.802 2.794 2.794 0 011.957.803l5.25 5.171 16.334-16.174a2.771 2.771 0 011.958-.803 2.792 2.792 0 011.958.803 2.74 2.74 0 01.812 1.94 2.719 2.719 0 01-.812 1.938L80.39 90.543a2.768 2.768 0 01-1.958.804 2.79 2.79 0 01-1.959-.804z"
                fill="#2F5284"
            />
            <Ellipse cx={133.5} cy={11.025} rx={7.5} ry={7.875} fill="#C4D7F2" />
            <Ellipse cx={14} cy={123.9} rx={5} ry={5.25} fill="#C4D7F2" />
            <Ellipse cx={7.5} cy={41.475} rx={7.5} ry={7.875} fill="#687E9D" />
            <Ellipse cx={165.5} cy={36.225} rx={2.5} ry={2.625} fill="#8E8E8E" />
            <Ellipse cx={145} cy={133.35} rx={4} ry={4.2} fill="#C4D7F2" />
            <Ellipse cx={92.5} cy={164.325} rx={3.5} ry={3.675} fill="#578CD9" />
            <Ellipse cx={62.5} cy={3.675} rx={3.5} ry={3.675} fill="#578CD9" />
            <Ellipse cx={154} cy={71.4} rx={5} ry={5.25} fill="#687E9D" />
        </Svg>
    )
}

export default AlertComponent
