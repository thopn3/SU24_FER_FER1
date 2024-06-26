export default function DynamicProperties(){
    const arr = ["Flutter", "Vue", "React", "Next"];
    const obj = {
        "Flutter" : 1,
        "Vue" : 2,
        "React": 3,
        "Next" : 4
    };

    return (
        <div>
            <hr/>
            <h1>Array: </h1>
            <ul>
                {
                    arr.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <h1>Object: </h1>
            <ul>
                {
                    Object.keys(obj).map(index => (
                        <li key={index}>{index} : {obj[index]}</li>
                    ))
                }
            </ul>
        </div>
    );
}