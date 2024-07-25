import { ReactNode } from "react";

interface ButtonBaseProps {
    title?: string;
    onClick: () => void,
    icon?: ReactNode,
    buttonStyles?: any,
    buttonClassName?: string,
    buttonTextStyle?: any,
    buttonTextClassName?: string,
    children: ReactNode
}


function ButtonBase({
    buttonStyles = {},
    buttonClassName = '',
    onClick = () => { console.log(" AM Btn Clicked ") },
    children
}: Readonly<ButtonBaseProps>): JSX.Element {
    return (
        <button
            onClick={() => { if (onClick !== undefined) { onClick() } }}
            className={buttonClassName}
            style={buttonStyles}
        >
            {children}
        </button>
    )
}

export { ButtonBase }
