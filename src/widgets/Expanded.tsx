import { CSSProperties, ReactNode } from "react";

// See also:
// 
// - The reason for defining the hidden value of the overflow property is
//   that it must force scrollable child elements not to overflowed
//   the size of the parent element.

export function Expanded({children}: {
    children: ReactNode
}) {
    const style: CSSProperties = {
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }

    return (
        <div style={style}>{children}</div>
    )
}

export function ExpandedWidth({children}: {
    children: ReactNode
}) {
    const style: CSSProperties = {
        width: "100%",
        overflow: "hidden"
    }

    return (
        <div style={style}>{children}</div>
    )
}

export function ExpandedHeight({children}: {
    children: ReactNode
}) {
    const style: CSSProperties = {
        height: "100%",
        overflow: "hidden"
    }

    return (
        <div style={style}>{children}</div>
    )
}