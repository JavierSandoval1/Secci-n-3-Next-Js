import  type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contactos',
 description: 'Información de contactos',
 keywords:['Contactos', 'Javier' , 'Lista de contactos'],
 
};



export default function Contact(){
    return (
        <>
        <span className="text-7xl">Contact</span>
        </>
    )
}