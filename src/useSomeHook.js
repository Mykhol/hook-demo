import { useState } from "react";

export function useSomeHook() {

    const [someState, setSomeState] = useState("hello")

    return {
        someState
    }

}