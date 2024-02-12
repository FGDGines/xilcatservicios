import { LuCookie } from 'react-icons/lu';
import { useAppStore } from '../../store';

interface AcceptCookiesDto {
    accepted: boolean;
}

export const Cookie = () => {
    const { closeModal } = useAppStore()
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
                closeModal()
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
        <>
            <div className='flex gap-2 items-center text-[20px] text-blue-500 font-bold mb-4'>
            <LuCookie className="text-3xl"/>
            Consentimiento de Cookies
        </div>
        <div className='text-justify'>
            Este pagina web usa cookies para ayudarte a tener una mejor y mas admisible experiencia de navegacion en el sitio web
            {' '}
            <a className='text-blue-500' href='/cookies'>Leer mas ...</a>
        </div>
        <div className='flex gap-6 justify-center mt-4'>
            <button className='py-2 px-4 border rounded-md bg-cs-purple text-white' onClick={handleAcceptCookies}>Aceptar</button>
            <button className='py-2 px-4 border rounded-md'>Rechazar</button>
        </div>
      </>
    )
    
}
