import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditCarComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.058 3.505l4.272 4.292L6.517 18.664l-4.27-4.293L13.058 3.505zm7.514-1.036L18.667.555a1.884 1.884 0 00-2.67 0L14.17 2.389l4.272 4.293 2.129-2.14c.57-.573.57-1.499 0-2.073zM.012 20.405a.487.487 0 00.588.58l4.76-1.159-4.27-4.293-1.078 4.872z"
                fill={props.color}
            />
        </Svg>
    )
}

export default EditCarComponent
