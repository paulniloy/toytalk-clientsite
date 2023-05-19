import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';
import usertitle from '../../TItle/Title';

const Alltoys = () => {

    const [searchitem, setsearchitem] = useState('');
    const [alltoys, setalltoys] = useState([]);
    const [currentpage, setcurrentpage] = useState(0);
    const { totalnumber } = useLoaderData();
    const [itemsperpage, setitempsperpage] = useState(20);


    const handleselectchange = (event) => {
        setitempsperpage(event.target.value);
        setcurrentpage(0);
    }





    // const itemsperpage = 2;
    const totalpage = Math.ceil(totalnumber / itemsperpage);

    const totalshowingnumber = [...Array(totalpage).keys()];

    // useEffect(() => {
    //     fetch(`http://localhost:5000/alltoys`)
    //     .then(res=>res.json())
    //     .then(data=>setalltoys(data))
    // }, [currentpage, itemsperpage])

    useEffect(() => {
        fetchData();
      }, [currentpage, itemsperpage]);
    
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/alltoysbylimit?page=${currentpage}&limit=${itemsperpage}`);
          const jsonData = await response.json();
          setalltoys(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    console.log(alltoys);


    usertitle("All_Toys")

    // const alltoys = useLoaderData();
    const { toyname, toypic, email, sellername, price, rating, quantity, description, category } = alltoys;

    return (
        <div className='sm:m-20'>
            <div className='mb-5 flex sm:flex-row items-center sm:gap-10 sm:justify-center flex-col'>
                <input onChange={(e) => setsearchitem(e.target.value)} placeholder='search by toyname' className='bg-red-200 p-5 rounded-lg' type="search" name="" id="" />
                {/* <button className='btn btn-primary'>Search result</button> */}

            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Toy Name</th>
                            <th>Toy Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.filter((toy) => {
                                return searchitem.toLowerCase() === '' ? toy : toy.toyname.toLowerCase().includes(searchitem);
                            }).map(toy => <Table
                                key={toy._id}
                                toy={toy}
                            ></Table>)
                        }
                    </tbody>
                </table>
                <div className='flex justify-center gap-10 mt-10'>
                    {
                        totalshowingnumber.map(number =>
                            <button onClick={() => setcurrentpage(number)} className='bg-gray-400 px-4 rounded-lg'
                                key={number}>
                                {number}
                            </button>
                        )
                    }
                    <select value={itemsperpage} onChange={handleselectchange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default Alltoys;