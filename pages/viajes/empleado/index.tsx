// pages/viajes/empleado/[id].tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';


const Empleado = () => {
    const [id, setId] = useState('');
    const router = useRouter();

    const handleSubmit = (event:any) => {

        event.preventDefault();
        router.push(`/viajes/empleado/${id}`);
    };

    return (
        <div className='flex-col'>
            <Nav/>
            <div className='flex h-screen'>

                <Sidebar/>

                <div className="flex justify-center items-center w-full h-screen">
                    <form className="w-full max-w-xs" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="idNumber" className="text-gray-700 text-lg font-bold">
                                ID del empleado
                            </label>
                            <input type="text" id="idNumber" name="idNumber" 
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                           placeholder="Ingrese ID" value={id} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                    type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        
    );
};


export default Empleado;
