import { ReactNode, useLayoutEffect, useState } from "react";

// Signature for a factory function of a react-node about display size.
export type SizedBuilder = (width: number, height: number) => ReactNode;

export function SizeBuilder({builder}: {
    builder: SizedBuilder
}) {
    // Returns current window inner relative display size object.
    const getSize = () => {
        return { width: window.innerWidth, height: window.innerHeight };
    }

    const [size, setSize] = useState(getSize());

    // Called when the window display size changes.
    useLayoutEffect(() => {
        const handleResize = () => setSize(getSize());
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <>{builder(size.width, size.height)}</>;
}