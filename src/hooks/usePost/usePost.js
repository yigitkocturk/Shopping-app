import {useState} from 'react';
import axios from 'axios';

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error,setError] = useState(null);

    const post = async (url, apiData) => {
        try{
            setloading(true);
            const {data: responseData} = await axios.post(url, apiData);
            setData(responseData);
            setloading(false);
        }catch (err) {
            setError(err);
            setloading(false);
        }
    };
    return {data, loading, error, post};
}

export default usePost;