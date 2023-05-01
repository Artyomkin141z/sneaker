import { BiPlusCircle } from "react-icons/bi";

export default function CategoriesIndexPage(){
    return (
        <div className="bg-white w-full h-full py-8 px-6 rounded-2xl">
            <header className="flex justify-between border-b-2 border-gray-500 pb-3">
                <h2 className="text-2xl font-semibold">Категории</h2>
                <button className="flex gap-2 items-center">
                    <BiPlusCircle className="w-8 h-8"/>
                </button>
            </header>
            <section>

            </section>
        </div>
    )
}