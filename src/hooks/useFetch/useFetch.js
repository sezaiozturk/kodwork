import axios from "axios";
import { useState } from "react";

function useFetch() {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);

    async function fetch(url) {
        try {
            const { data: response } = await axios.get(url);
            setData(response.results);
            setLoad(false);
        } catch (error) {
            setError(true);
            setLoad(false);
        }
    }
    return { data, load, error, fetch };
}
export default useFetch;