import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AcceptCookiesDto {
    accepted: boolean;
}

export const Cookie = () => {
    const { t, i18n } = useTranslation();

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

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).catch((error) => {
            console.error('Error al cambiar el idioma:', error);
        });
    };

    return (
        <div>

            <div className="language-selector">
                <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={i18n.language}
                >

                    <option value="ca">🇨🇦 Catalán</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="en">🇪n English</option>
                </select>
            </div>
            <h1>{t('greeting')}</h1>
            {!acceptedCookies && (
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAcceptCookies}>Aceptar Cookies</button>
            )}

            {acceptedCookies && <p>Las cookies han sido aceptadas.</p>}
        </div>
    );
};


