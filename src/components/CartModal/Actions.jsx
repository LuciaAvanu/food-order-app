export default function Actions({setModalIsOpen}){
    return <div className="self-end mt-6 justify-center items-center">
        <button onClick={() => setModalIsOpen(false)} className=" hover:text-red-500">Close</button>
        <button className="ml-6 bg-yellow-400 p-3 rounded-md">Go to Checkout</button>
    </div>
}