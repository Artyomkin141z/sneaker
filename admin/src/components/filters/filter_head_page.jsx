import { BiPlusCircle } from "react-icons/bi";

export default function FilterHead({headName}) {
    return (
        <header className="flex justify-between border-b-2 border-gray-500 pb-3 mb-5">
            <h2 className="text-2xl font-semibold">{headName}</h2>
            <button className="flex gap-2 items-center">
                <BiPlusCircle className="w-8 h-8"/>
            </button>
        </header>
    )
}