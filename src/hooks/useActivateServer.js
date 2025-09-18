import { useEffect } from "react";

const useActivateServer = () => {
    useEffect(() => {
        fetch(import.meta.env.VITE_URL_BACKEND_DJANGO);
        fetch(import.meta.env.VITE_NEXT_APP);
    }, []);
}

export default useActivateServer;