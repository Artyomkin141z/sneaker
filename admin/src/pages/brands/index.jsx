import FilterHead from "@/components/filters/filter_head_page";

import { BiEditAlt, BiTrash, BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function BrandsIndexPage() {
  return (
    <div className="bg-white w-full h-full py-8 px-6 rounded-2xl max-w-4xl mx-auto">
      <FilterHead 
        headName = 'Бренды'
      />
      <section className="flex flex-col">
        <div className="flex justify-between hover:bg-gray-100 px-2 py-3 rounded-xl transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div>Adidas</div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
              <BiEditAlt />
            </button>
            <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
              <BiTrash />
            </button>
          </div>
        </div>
        <div className="flex justify-between hover:bg-gray-100 px-2 py-3 rounded-xl transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div>Adidas</div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
              <BiEditAlt />
            </button>
            <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
              <BiTrash />
            </button>
          </div>
        </div>
        <div className="flex justify-between hover:bg-gray-100 px-2 py-3 rounded-xl transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div>Adidas</div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
              <BiEditAlt />
            </button>
            <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
              <BiTrash />
            </button>
          </div>
        </div>
      </section>
      <footer>
        <ol className="flex justify-center gap-1 text-xs font-medium mt-4">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <BiChevronLeft />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              1
            </a>
          </li>

          <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <BiChevronRight />
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
}
