import { useSomeHook } from "./useSomeHook";

export function useCustomRequest() {

    const { someState } = useSomeHook();

    async function makeRequest(url) {
        
        // mocking using the someState data
        console.log(someState)

        const response = await fetch(url, { method: "GET"});

        // return request json
        return await response.json()
    }

    return {
        makeRequest
    }

}