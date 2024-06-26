import React from "react";
// class component
class MyComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>MyComponent - Type: Class component</h1>
                <p>
                    This is content of MyComponent
                </p>
            </div>
        );
    }
}

// function component
function Hello(){
    let name = "Hoang Tung";
    return (
        <>
            <hr/>
            <div>Welcome {name} to Hello component</div>
        </>
    );
}

export default MyComponent;
export {Hello};