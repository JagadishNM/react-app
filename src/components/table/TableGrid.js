import {useEffect, useState} from 'react';


export default function TableGrid(){
    const data = [{name: 'Nikhil', age: 24, location: 'Hyderabad'},
        {name: 'Akhil', age: 30, location: 'Bengalore'},
        {name: 'Srini', age: 28, location: 'Pune'}
    ]
    const [gridData, setGridData] = useState(data);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch('');
            const data = await res.json();
           // setGridData(data);
        }
        //fetchData();
    },[])

    return (
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                </thead>
                <tbody>
                    {
                        gridData.map((data) =>(
                             
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.location}</td>

                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}