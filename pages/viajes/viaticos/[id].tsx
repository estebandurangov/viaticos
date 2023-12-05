import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';

interface ViajeProps {
    viaje: any
}
interface Params extends ParsedUrlQuery {
    id: string;
}

const ViajePage: NextPage<ViajeProps> = ({ viaje }) => {
    console.log(viaje)
    return (
        <div className='flex-col'>
            <Nav/>
            <div className='flex h-screen'>

                <Sidebar/>
                <div className='flex-col w-full  m-20' >
                    <h1 className='text-2xl my-10 font-bold'>listado de viaticos del viaje {viaje.id}</h1>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className='text-left text-xl p-5'>
                                <th className='w-1/4'>Nombre</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viaje.viaticos.map((viatico, index) => (
                                <tr key={index} className={`text-lg ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                                    <td>{viatico.nombre}</td>
                                    <td>{viatico.monto}</td>
                                    <td>{new Date(viaje.createdAt).toLocaleDateString()}</td>
                                    <td>{viaje.estado_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
};

export const getServerSideProps: GetServerSideProps<ViajeProps> = async (context) => {
    const { id } = context.params as Params;
    const res = await fetch(`http://127.0.0.1:8000/viaje/${id}`);
    const viaje = await res.json();

    return {
        props: {
            viaje,
        },
    };
};

export default ViajePage;
