import { useEffect } from "react";
// A custom hook to set document title for each page / route
export const useTitle = (title) => {

    useEffect(() => {
        // Actual side effect to update the title of page in the format below
        document.title = `${title} / Content Craft`;
    });

    return null;
}
