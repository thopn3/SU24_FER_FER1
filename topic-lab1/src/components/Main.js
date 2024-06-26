export default function Main(props){
    // Lay thuoc tinh data cua doi tuong props
    const products = props.data;
    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>price</th><th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(p => <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <img src={'./images/'+p.image}/>
                                
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </main>
    );
}