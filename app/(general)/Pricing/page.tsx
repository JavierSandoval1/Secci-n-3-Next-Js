import  type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'List of prices',
 keywords:['Prices', 'Money' , 'Lists of prices'],
 
};






export default function Pricing(){
    return (
        <>
        <span className="text-7xl">Pricing</span>
        </>
    )
}