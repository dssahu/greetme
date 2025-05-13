import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState("");

    // useEffect(() => {
    //     const backendUrl = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:8080';
    //     fetch(`${backendUrl}/api/hello`)
    //         .then(res => res.text())
    //         .then(data => setMessage(data))
    //         .catch(err => {
    //             console.error("Failed to fetch", err);
    //             setMessage("Failed to fetch");
    //         });
    // }, []);
    useEffect(() => {
        fetch("/api/hello")  // 'backend' is the docker-compose service name
            .then(res => res.text())
            .then(data => setMessage(data))
            .catch(err => console.error("Error:", err));
    }, []);


    return (
        <div>
            <h1>Hello from React</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
