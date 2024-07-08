/* eslint-disable */
import { useState, useEffect } from "react";
// import { tokenJson } from "../redux/reducers/functionalities.reducer";
import { useRouter } from "../hooks/use-router";
// import { updateToken } from '../redux/reducers/functionalities.reducer';


const useAxios = () => {
    const router = useRouter();

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [controller, setController] = useState();
    // let token = useSelector(tokenJson);

    const axiosFetch = async (configObj) => {

        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;
        try {
            axiosInstance.defaults.headers['jwtToken'] = token;
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig
            });
            setResponse(res.data);
        } catch (err) {
            setError(err);
            if (err?.response?.status === 404) {
                setError(err);
            }
            if (err?.response?.status === 403) {
                router.push("/login-phone")
            }
            else{
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const check = controller && controller.abort()
        return () => check;
    }, [controller]);

    return [response, error, loading, axiosFetch, setError];
}

export default useAxios
