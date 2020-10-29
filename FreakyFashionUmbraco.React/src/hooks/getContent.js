import { useState, useEffect } from 'react';

export default function(url) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchContent(){
        const json = await fetch(url).then(response => response.json());

        setData(json);
        setIsLoading(false);        
    }

    useEffect(() => {
        fetchContent();
    }, [url]);

    return [data, isLoading];
}