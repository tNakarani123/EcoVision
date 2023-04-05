import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PaytmComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 56 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M43.614 3.753l.461-.365c1.602-1.345 3.653-1.196 5.025.4.138.159.207.17.345.034.092-.103.196-.183.288-.285 1.072-1.038 2.49-1.345 3.815-.764 1.394.615 2.143 1.698 2.154 3.214.023 3.272.012 6.532.012 9.804 0 1.162-.726 1.892-1.89 1.892-.46 0-.922-.034-1.383.011-.472.046-.61-.102-.61-.593.023-3.191.011-6.383.011-9.575v-.399c-.011-.74-.311-1.048-1.025-1.083-.646-.034-1.095.354-1.164 1.004-.012.148 0 .307 0 .456v8.264c0 1.208-.703 1.915-1.925 1.903-.622-.011-1.463.274-1.82-.125-.312-.342-.104-1.151-.104-1.755V7.298c0-1.003-.657-1.516-1.51-1.174-.53.217-.703.639-.703 1.186.012 2.644 0 5.278 0 7.922v.627c-.034 1.106-.749 1.801-1.855 1.812-.46.012-.922-.034-1.383.012-.495.045-.645-.091-.634-.616.023-4.48.012-8.96.012-13.45 0-.194.011-.377 0-.57-.023-.251.08-.331.334-.331 1.06.011 2.109.011 3.17 0 .264 0 .39.068.368.353-.023.206 0 .388.011.684z"
                fill="#02B9EF"
            />
            <Path
                d="M19.185 9.932v4.673c-.012 2.03-1.083 3.078-3.135 3.09-.899 0-1.809.01-2.708 0-1.82-.023-3.157-1.22-3.25-3.021a36.23 36.23 0 01-.01-3.876c.091-1.847 1.52-3.146 3.41-3.169.496-.011 1.003 0 1.498 0 .484-.011.669-.285.657-.74 0-.457-.207-.662-.668-.64-.519.012-1.037.012-1.556 0-1.268-.022-1.97-.706-1.959-1.937 0-.502-.23-1.174.104-1.47.288-.251.945-.092 1.44-.092 1.29-.011 2.57 0 3.86 0 1.372 0 2.305.924 2.317 2.291.011 1.62 0 3.26 0 4.89zm-3.526 2.587v-.57c0-1.162 0-1.162-1.176-1.117-.588.023-.91.32-.922.923a29.43 29.43 0 000 1.425c.012.821.38 1.038 1.579 1.072.887.023.438-.593.519-.935.046-.25-.012-.536 0-.798zM29.44 8.69c0 1.744.023 3.5-.012 5.244-.023 1.345-.346 2.564-1.66 3.282a3.734 3.734 0 01-1.705.457c-1.325.022-2.65 0-3.975.022-.323 0-.392-.114-.38-.399.022-.478-.012-.946.01-1.425.024-.911.727-1.607 1.649-1.641.599-.023 1.187-.011 1.786 0 .484 0 .749-.194.749-.707 0-.524-.254-.707-.738-.718-.806-.023-1.613.091-2.408-.137-1.371-.399-2.374-1.527-2.408-2.93-.07-2.222-.023-4.445-.035-6.668 0-.25.08-.33.334-.319.945.012 1.878.023 2.823 0 .415-.011.358.217.358.468v5.015c0 .73.345 1.117.99 1.14.761.023 1.095-.285 1.095-1.049 0-1.687.012-3.385-.011-5.072 0-.4.104-.513.507-.502.841.034 1.694.046 2.535 0 .461-.023.53.148.519.547-.035 1.79-.023 3.591-.023 5.392zM.079 11.277V5.69c0-1.824 1.13-2.964 2.984-2.94 1.21.01 2.42-.138 3.619.09 1.532.297 2.5 1.47 2.512 3.033.011 1.652 0 3.305 0 4.958 0 2.075-1.233 3.34-3.33 3.397-.634.023-1.268.011-1.902 0-.288-.011-.415.08-.403.388.023.455.011.911 0 1.367-.023.98-.726 1.688-1.706 1.699-.576.011-1.302.24-1.67-.091-.346-.308-.093-1.038-.104-1.585-.012-1.573 0-3.157 0-4.73zm3.48-2.793v1.083c0 1.288 0 1.288 1.302 1.174.565-.046.83-.32.841-.878.012-.638-.023-1.288.012-1.926.069-1.847-.277-1.664-1.798-1.676-.276 0-.369.08-.369.353.023.616.012 1.243.012 1.87z"
                fill="#06306F"
            />
            <Path
                d="M32.702 11.3c0-1.517-.012-3.044.011-4.56 0-.354-.08-.502-.472-.49-.519.022-1.21.17-1.498-.08-.357-.331-.081-1.038-.127-1.585v-.114c0-.536-.173-1.163.058-1.562.23-.399.933-.148 1.428-.273.98-.25 1.718-.81 2.317-1.585.415-.524.933-.9 1.601-1.026.358-.068.577-.022.554.434-.035.638 0 1.288-.012 1.937-.011.274.092.365.369.354.46-.012.922.011 1.383-.012.276-.01.368.092.357.365-.012.935-.012 1.858 0 2.793 0 .262-.07.399-.357.365-.058-.012-.116 0-.173 0-.507.045-1.21-.228-1.475.114-.254.319-.092.98-.092 1.493 0 3.1-.012 6.19.011 9.29 0 .433-.115.57-.553.536-.415-.034-.841 0-1.268-.011-1.244-.046-2.062-.878-2.062-2.11V11.3z"
                fill="#02B9EF"
            />
        </Svg>
    )
}

export default PaytmComponent