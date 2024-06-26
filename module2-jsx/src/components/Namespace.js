function First(){
    return (
        <div>
            First component
        </div>
    );
}

function Second(){
    return (
        <div>
            Second component
        </div>
    );
}

export default function Parent(props){
    return (
        <div>
            <hr/>
            {props.children}
        </div>
    );
}

// Chỉ định các children component
Parent.First = First;
Parent.Second = Second;

export {First, Second};