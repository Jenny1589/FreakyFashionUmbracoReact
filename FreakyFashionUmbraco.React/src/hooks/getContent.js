import { useState, useEffect } from 'react';

export default function(url) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchContent(){
            setIsLoading(true);
            const json = await fetch(url).then(response => response.json());
    
            setData(json);
            setIsLoading(false);        
        }
        
        fetchContent();
    }, [url]);

    return [data, isLoading];
}