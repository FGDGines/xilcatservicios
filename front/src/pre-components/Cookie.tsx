import { useState } from 'react';

interface AcceptCookiesDto {
    accepted: boolean;
}

export const Cookie = () => {
    const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);

    const handleAcceptCookies = async () => {
        const data: AcceptCookiesDto = {
            accepted: true, // Cambia este valor dependiendo de la lógica en tu aplicación
        };

        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/cookies/accept-cookies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Si la respuesta es exitosa, marca las cookies como aceptadas en tu aplicación
                setAcceptedCookies(true);
                alert('Cookies aceptadas correctamente');
            } else {
                // Si la respuesta no es exitosa, maneja el error o la respuesta del servidor
                alert('Hubo un error al aceptar las cookies');
            }
        } catch (error) {
            // Manejo de errores de red u otros errores
            console.error('Error:', error);
            alert('Hubo un error en la solicitud');
        }
    };

    return (
        <div>
            <h1>Cookie Example</h1>
            {!acceptedCookies && (
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAcceptCookies}>Aceptar Cookies</button>
            )}

            {acceptedCookies && <p>Las cookies han sido aceptadas.</p>}
        </div>
    );
};


