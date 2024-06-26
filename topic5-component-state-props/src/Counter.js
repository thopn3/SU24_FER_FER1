import { useEffect, useState } from "react";

export default function Counter(){
    // Tao ra 1 state de quan ly trang thai du lieu cho bien count
    const [count, setCount] = useState(0);

    // Kiem soat vong doi lifecycle cua component
    useEffect(()=>{
        // componentDidMount(), componentDidUpdate()
        console.log("DidMount or DidUpdate");

        // componentWillUnMout()
        return ()=>{
            console.log("WillUnmout");
        }
    }, [count]);

    return (
        <div>
            <p>You clicked: {count} times</p>
            <button onClick={e => setCount(count + 1)}>Click me</button>
        </div>
    );
}