import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

// Tipado para las props de tu componente
interface MyPageProps {
    data: any;  // Reemplaza 'any' con un tipo más específico según tus datos
}

// Componente de página
const Index: NextPage<MyPageProps> = ({ data }) => {
  console.log(data)
    return (
        <div>
            Hola
            {/* Ejemplo: <p>{data.someField}</p> */}
        </div>
    );
};

// Función getServerSideProps con tipado
export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
    const res = await fetch('http://127.0.0.1:8000/empleado/1');
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

export default Index;
