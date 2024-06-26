import { useEffect, useState } from "react";

export default function StudentList(props){
    const {data, majorData} = props;
    const [students, setStudents] = useState(data);
    const [major, setMajor] = useState("all");
    const [search, setSearch] = useState("");
    
    useEffect(()=>{
        if(major !== "all"){
            if(search.length == 0){
                const result = data?.filter(s=> s?.major === major);
                setStudents(result);
            }else{
                const result = data?.filter(s=> 
                    s?.major === major && s?.name.toLowerCase().startsWith(search.toLowerCase()));
                setStudents(result);
            }
        }else{
            const searchResult = data?.filter(s=>s.name.toLowerCase().startsWith(search.toLowerCase()));
            setStudents(searchResult);
        }
    }, [major, search])

    return (
        <div>
            Filter students by Major
            <select onChange={e => setMajor(e.target.value)}>
                <option value="all">-- Select all --</option>
                {
                    majorData?.map(m=> (
                        <option value={m.name} key={m.id}>{m.name}</option>
                    ))
                }
            </select>
            Search
            <input placeholder="Enter name" onChange={e=>setSearch(e.target.value)}/>
            <table>
                <tr>
                    <th>ID</th><th>Name</th><th>Age</th><th>Major</th>
                </tr>
                {
                    students?.map(s => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.major}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}