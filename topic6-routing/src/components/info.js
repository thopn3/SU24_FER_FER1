import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Information(){
    const dieuhuong = useNavigate();
    const {n, a} = useParams();
    const [count, setCount] = useState(0);

    useEffect(()=>{
        if(count>0){
            if(window.confirm("Muon quay ve Home khong?")==true)
                dieuhuong("/home");
        }
            
    }, [count]);

    return (
        <div>
            <h3>Information view</h3>
            Hello: {n} <br/>
            Age: {a}

            <button onClick={()=>setCount(count+1)}>Back to Home</button>
        </div>
    )
}