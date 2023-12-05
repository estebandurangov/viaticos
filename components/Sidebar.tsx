import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const [isEmpleadoSubmenuOpen, setEmpleadoSubmenuOpen] = useState(false);
    const [isViajesSubmenuOpen, setViajesSubmenuOpen] = useState(false);
    const router = useRouter();

    const handleEmpleadoClick = () => {
        router.push('/viajes/empleado');
    };

    const listar = () => {
        router.push('/viajes');
    };

    return (
        <div className="w-64 h-full shadow-md bg-white px-1">
            <ul className="list-none p-0">
                <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setEmpleadoSubmenuOpen(!isEmpleadoSubmenuOpen)}>
                    Empleados
                    {isEmpleadoSubmenuOpen && (
                        <ul className="list-none p-0">
                            <li className="pl-4 p-2 cursor-pointer hover:bg-gray-100" onClick={handleEmpleadoClick}>Viajes Empleado</li>
                        </ul>
                    )}
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setViajesSubmenuOpen(!isViajesSubmenuOpen)}>
                    Viajes
                    {isViajesSubmenuOpen && (
                        <ul className="list-none p-0">
                            <li className="pl-4 p-2 cursor-pointer hover:bg-gray-100" onClick={listar}>Listar Todos</li>
                            <li className="pl-4 p-2 cursor-pointer hover:bg-gray-100">Viáticos</li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
