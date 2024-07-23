/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useAxios = () => {
    const router = useHistory();

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {

        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            let token = localStorage.getItem("coladjsTk")
            console.log("toke",token)
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
            if (err?.response?.status === 401) {
                localStorage.removeItem("coladjsTk")
                router.push("/login")
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
