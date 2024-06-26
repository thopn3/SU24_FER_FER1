import './Nav.css';

export default function Nav({data=[]}){
    return (
        <menu>
            <ul className="menu-container">
                {
                    data?.map(m=>{
                        if(typeof m.menu === "string"){
                            return <li>{m.menu}</li>
                        }else{
                            const pMenu = m.menu; // { 'Products': ['Men', 'Women', 'Child'] }
                            const subMenu = Object.values(pMenu);
                            return <li> {Object.keys(pMenu)[0]}
                                    <ul>
                                        {
                                            subMenu?.map(s => <li>
                                                {s}
                                            </li>)
                                        }
                                    </ul>
                            </li>
                        }
                    })
                }
            </ul>
        </menu>
    );
}