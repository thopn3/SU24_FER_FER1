export default function Section(props){
    return (
        <section>
            <hr/>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}

function Button(props){
    return (
        <button className={props.class}>
            {props.children}
        </button>
    );
}

export {Button};