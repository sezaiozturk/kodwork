import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setJobs } from "../../context/jobsSlice";

function useFetch() {
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

    async function fetch(url) {
        try {
            const { data: response } = await axios.get(url);
            dispatch(setJobs(response.results));
            setLoad(false);
        } catch (error) {
            setError(true);
            setLoad(false);
        }
    }
    return { data, load, error, fetch };
}
export default useFetch;