import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 69 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M34.226 60.024c16.575 0 30.012-13.437 30.012-30.012C64.238 13.437 50.801 0 34.226 0 17.651 0 4.214 13.437 4.214 30.012c0 16.575 13.437 30.012 30.012 30.012zM21.112 63.986c-3.25 0-4.826 1.145-4.826 3.527 0 1.68 1.264 2.46 3.768 2.46 3.25 0 4.828-1.151 4.828-3.534 0-1.682-1.267-2.453-3.77-2.453zm-.797 4.48c-1.56 0-2.227-.19-2.227-1.126 0-1.491.424-1.846 2.755-1.846 1.577 0 2.236.19 2.236 1.127 0 1.481-.434 1.844-2.764 1.844zM35.965 64.082l-3.397 3.847-1.932-3.847h-2.191l2.694 5.243c.191.363.494.648 1.03.648.564 0 .972-.31 1.275-.648l4.644-5.243h-2.123zM38.754 64.082l-1.03 5.796h1.792l1.023-5.796h-1.785zM46.622 66.395h-3.154c-.372 0-.555-.096-.555-.33 0-.346.208-.475.694-.475h4.02l1.422-1.508h-5.035c-2.028 0-2.833.892-2.833 2.071 0 .84.588 1.394 1.905 1.394h3.163c.365 0 .546.113.546.347 0 .337-.208.494-.694.494h-4.392l-1.413 1.49h5.398c2.063 0 2.852-.91 2.852-2.166 0-.866-.668-1.317-1.924-1.317zM50.034 64.082l-1.03 5.796h1.793l1.023-5.796h-1.786zM57.009 63.986c-3.249 0-4.826 1.145-4.826 3.527 0 1.68 1.266 2.46 3.77 2.46 3.249 0 4.826-1.151 4.826-3.534 0-1.681-1.265-2.453-3.77-2.453zm-.797 4.48c-1.559 0-2.227-.19-2.227-1.126 0-1.491.426-1.846 2.757-1.846 1.575 0 2.234.19 2.234 1.127 0 1.481-.434 1.844-2.764 1.844zM67.372 64.082l-.607 3.405-2.99-3.189c-.233-.26-.45-.312-.667-.312-.537 0-1.048.312-1.177 1.083l-.841 4.809h1.63l.596-3.405 2.99 3.19c.242.258.424.31.668.31.52 0 1.03-.32 1.168-1.09L69 64.081h-1.628zM11.537 68.82h-.985c-1.055 0-1.91-.836-1.91-1.865s.855-1.865 1.91-1.865h.97l1.009-1.009h-.851c-2.218 0-4.037 1.336-4.037 3.24 0 1.465 1.204 2.557 3.015 2.557h1.937l-1.058-1.058z"
                fill="#093"
            />
            <Path
                d="M12.685 69.969a.667.667 0 01-.422.148h-1.711c-1.564 0-2.874-1.089-3.175-2.53H5.783l-.012.012h-3.57l-.138.789h4.939l-1.421 1.49H0l1.032-5.796h6.706L6.31 65.59H2.556l-.121.693h4.584l-.009.008h.374c.314-1.426 1.616-2.497 3.168-2.497h1.711c.157 0 .301.052.414.141l-.146.147h-.851c-2.218 0-4.037 1.335-4.037 3.24 0 1.464 1.204 2.556 3.015 2.556h1.937l.09.09z"
                fill="#093"
            />
            <Path
                d="M15.623 68.268c0 .359-.296.65-.664.65h-1.695v.551a.609.609 0 01-.126.377l-1.202-1.203v-3.395l1.167-1.167.028-.028a.614.614 0 01.133.388v.584h1.695a.652.652 0 01.664.65c0 .357-.296.648-.664.648h-1.695v1.296h1.695c.368 0 .664.291.664.65z"
                fill="#093"
            />
            <Path
                d="M12.56 69.878h-.056a.226.226 0 00.024-.032l.032.032z"
                fill="#000"
            />
            <Path
                d="M24.851 35.48c-.645.651-1.173 1.317-1.379 2.178-.166.696.017 1.322.478 1.86.575.669 1.266 1.21 1.98 1.72a14.545 14.545 0 004.667 2.213 14.7 14.7 0 003.548.516 14.787 14.787 0 004.71-.649 14.618 14.618 0 005.403-3.027 14.584 14.584 0 004.135-6.026c.835-2.28 1.091-4.631.768-7.041a14.543 14.543 0 00-3.238-7.434 14.631 14.631 0 00-5.344-4.09 14.644 14.644 0 00-5.72-1.301 14.58 14.58 0 00-6.149 1.17 14.643 14.643 0 00-5.407 3.949 14.604 14.604 0 00-3.311 6.73 14.581 14.581 0 00-.034 5.688c.198 1.044.505 2.054.918 3.033.133.313.027.612-.25.728-.278.116-.562-.018-.695-.333a15.794 15.794 0 01-1.224-5.288c-.14-2.526.286-4.952 1.31-7.264 1.236-2.793 3.13-5.048 5.662-6.758a15.355 15.355 0 016.445-2.504c3.257-.476 6.381-.014 9.344 1.438 2.533 1.239 4.584 3.041 6.161 5.374a15.335 15.335 0 012.51 6.457c.473 3.262.008 6.39-1.454 9.353-1.239 2.517-3.037 4.558-5.359 6.13a15.477 15.477 0 01-6.459 2.513c-2.27.34-4.518.203-6.724-.43a15.58 15.58 0 01-6.703-3.902c-.634-.62-1.012-1.367-1.044-2.268-.023-.67.18-1.28.491-1.859a6.387 6.387 0 011.159-1.513c.084-.082.12-.145.057-.267-.111-.217-.047-.419.108-.597l.862-.992.189-.222c-.216-.088-.404-.184-.602-.24-.33-.095-.534-.33-.715-.591-.17-.245-.114-.552.131-.758.547-.463 1.098-.918 1.648-1.377 2.795-2.331 5.59-4.662 8.382-6.996.206-.171.42-.269.693-.272 1.214-.019 2.43-.047 3.644-.072l2.961-.061c.1-.002.2-.007.3 0a.76.76 0 01.71.782c-.003 1.009-.014 2.018-.021 3.028-.005.671-.007 1.342-.01 2.013-.002.572-.33.893-.896.863-.848-.044-1.695-.098-2.543-.141a.754.754 0 01-.55-.266c-.289-.323-.581-.64-.89-.945a1.024 1.024 0 00-.386-.237c-.407-.131-.82-.234-1.233-.352a.59.59 0 00-.623.167c-1.04 1.054-2.082 2.107-3.116 3.166a.901.901 0 00-.205.37c-.197.67-.374 1.347-.574 2.015a.842.842 0 01-.235.368c-.399.353-.816.684-1.223 1.027a.592.592 0 01-.65.11c-.18-.075-.364-.138-.54-.217-.108-.05-.19-.04-.293.021-.903.522-1.807 1.04-2.715 1.552-.345.194-.544.154-.806-.14-.018-.02-.027-.05-.052-.097l-.002-.005zm14.937-9.57c-.032.07-.05.122-.077.169-.163.282-.335.562-.491.85-.032.058-.045.17-.012.214.078.098.158.012.222-.047.474-.434.947-.87 1.42-1.306.139-.13.125-.209-.048-.3-.186-.097-.371-.196-.563-.285-.148-.07-.161-.158-.087-.293.15-.272.295-.547.428-.826.026-.052-.013-.134-.021-.203-.063.017-.147.013-.185.052a97.85 97.85 0 00-1.231 1.283c-.13.136-.116.198.048.294.158.093.32.178.476.273.047.028.08.079.121.122v.004z"
                fill="#fff"
            />
            <Path
                d="M42.78 28.108v-4.812c.074-.005.126-.012.18-.012.576 0 1.153 0 1.73.007.318.003.432.12.434.432l.018 3.873c.002.415-.082.497-.492.499-.555.003-1.108.008-1.663.012h-.209l.002.001z"
                fill="#fff"
            />
        </Svg>
    )
}

export default LogoComponent