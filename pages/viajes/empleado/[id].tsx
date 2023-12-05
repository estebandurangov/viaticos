// pages/viajes/empleado/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';

interface EmpleadoProps {
    empleado: {
        nombre: string;
        correo: string;
        cargo_id: number;
        id: number;
        createdAt: string;
        updatedAt: string;
        viajes: any[]; // Reemplaza 'any' con un tipo más específico si es posible
        cargo: {
            nombre: string;
            id: number;
            createdAt: string;
            updatedAt: string;
        };
    };
}
interface Params extends ParsedUrlQuery {
    id: string;
}

const EmpleadoPage: NextPage<EmpleadoProps> = ({ empleado }) => {
    return (
        <div className='flex-col'>
            <Nav/>
            <div className='flex h-screen'>

                <Sidebar/>
                <div className='flex-col w-full  m-20' >
                    <h1 className='text-2xl my-10 font-bold'>Viajes de {empleado.nombre}</h1>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className='text-left text-xl p-5'>
                                <th className='w-1/4'>Ciudad</th>
                                <th>Fecha de Inicio</th>
                                <th>Fecha de Fin</th>
                                <th>Estado del Viaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleado.viajes.map((viaje, index) => (
                                <tr key={index} className={`text-lg ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                                    <td>{viaje.ciudad.nombre}</td>
                                    <td>{new Date(viaje.fechaInicio).toLocaleDateString()}</td>
                                    <td>{new Date(viaje.fechaFin).toLocaleDateString()}</td>
                                    <td>{viaje.estadoViaje.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
};

export const getServerSideProps: GetServerSideProps<EmpleadoProps> = async (context) => {
    const { id } = context.params as Params;
    console.log(id)
    const res = await fetch(`http://127.0.0.1:8000/empleado/${id}`);
    const empleado = await res.json();

    return {
        props: {
            empleado,
        },
    };
};

export default EmpleadoPage;
