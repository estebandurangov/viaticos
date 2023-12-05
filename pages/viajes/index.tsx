// pages/viajes/empleado/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';
import { useRouter } from 'next/router';

interface ViajeProps {
    viajes:any
}

const Viaje: NextPage<ViajeProps> = ({ viajes }) => {
    const router = useRouter();

    const verMas = (id:any) => {
        router.push(`/viajes/viaticos/${id}`);
    };

    const verEmpleado = (id:any) => {
        router.push(`/viajes/empleado/${id}`);
    }

    return (
        <div className='flex-col'>
            <Nav/>
            <div className='flex h-screen'>

                <Sidebar/>
                <div className='flex-col w-full  m-20' >
                    <h1 className='text-2xl my-10 font-bold'>Lista de viajes</h1>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className='text-left text-xl p-5'>
                                <th className='w-1/4'>Empleado</th>
                                <th>ciudad</th>
                                <th>estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viajes.map((viaje, index) => (
                                <tr key={index} className={`text-lg ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                                    <td><span onClick={() => verEmpleado(viaje.empleado.id)} className='cursor-pointer'>{viaje.empleado.nombre}</span></td>
                                    <td>{viaje.ciudad.nombre}</td>
                                    <td>{viaje.estadoViaje.nombre}</td>
                                    <td><span onClick={() => verMas(viaje.id)} className='cursor-pointer'>Ver más</span></td>
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

    const res = await fetch(`http://127.0.0.1:8000/viajes`);
    const viajes = await res.json();

    return {
        props: {
            viajes,
        },
    };
};

export default Viaje;
