import React, { useState } from 'react';
import { Row } from 'react-bootstrap'



let customers = [
    //a
    {
        "name": "Alfreds Futterkiste",
        "country": "Germany"
    },
    {
        "name": "Berglunds snabbkop",
        "country": "Sweden"
    },
    //a
    {
        "name": "Island Trading",
        "country": "UK"
    },
    //a
    {
        "name": "Koniglich Essen",
        "country": "Germany"
    },
    //a
    {
        "name": "Laughing Bacchus Winecellars",
        "country": "Canada"
    },
    //a
    {
        "name": "Magazzini Alimentari Riuniti",
        "country": "Italy"
    },
    //
    {
        "name": "North/South",
        "country": "UK"
    },
    //a
    {
        "name": "Paris specialites",
        "country": "France"
    }
];

const Object = () => {
    //   const str = "a"
    const [entername, setEnterName] = useState('')
    const [table, setTable] = useState([])



    console.log(table);

    const submitHandler = (e) => {
        e.preventDefault()
        const result = customers.filter(mov => mov.name.toLowerCase().includes(entername || ""));
        console.log(result);
        setTable(result)
    }

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}    >
                    <input type="text" placeholder='Search' onChange={(e) => {
                        setEnterName(e.target.value)
                        const result = customers.filter(mov => mov.name.toLowerCase().includes(entername || ""));
                        setTable(result)
                    }} />
                    <button>Click</button>
                </form>
            </div>
            <Row>
                <table>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Name</th>
                            <th>country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((mov, i) => {
                            return (
                                <tr key={i}>
                                    <td  >{i + 1}</td>
                                    <td  >{mov.name}</td>
                                    <td  >{mov.country}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Row>
        </div>
    );
}


export default Object;
