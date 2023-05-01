import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/ui/logo.png";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { BiCategory, BiShoppingBag, BiStoreAlt, BiGroup, BiGasPump, BiArchive, BiBusSchool, BiFilter, BiBandAid, BiCollection, BiFlag, BiChevronDown } from "react-icons/bi";

export default function Menu() {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('auth/signin')
    else console.log(data);
  }, [status])


  return (
    <div className="flex h-screen w-60 flex-col justify-between border-r bg-white fixed top-0 left-0 overflow-y-auto">
      <div className="px-4 py-6">
        <span className="grid h-10 place-content-center rounded-lg  text-xs text-gray-600">
          <Link className="flex justify-between items-center gap-2" href="/">
            <Image src={logo} alt="logo" width="40" height="40" />
            <div className="font-logo text-5xl text-gray-800">Sneaker</div>
          </Link>
        </span>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
          >
            <BiCategory />
            <span className="text-sm font-medium"> Главная </span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <BiShoppingBag />

            <span className="text-sm font-medium"> Заказы </span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <BiGroup />

            <span className="text-sm font-medium"> Клиенты </span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <BiStoreAlt />

                <span className="text-sm font-medium"> Магазин </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <BiChevronDown />
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiArchive />

                <span className="text-sm font-medium"> Товары </span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiGasPump />

                <span className="text-sm font-medium"> Поставки </span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiBusSchool />

                <span className="text-sm font-medium"> Поставщики </span>
              </Link>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <BiFilter />

                <span className="text-sm font-medium"> Фильтры </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <BiChevronDown />
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                href="/categories"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiCollection />

                <span className="text-sm font-medium"> Категории </span>
              </Link>

              <Link
                href="/labels"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiBandAid />

                <span className="text-sm font-medium"> Метки </span>
              </Link>

              <Link
                href="/brands"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiFlag />

                <span className="text-sm font-medium"> Бренды </span>
              </Link>
            </nav>
          </details>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link
          href="/auth/signin"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{data?.user?.name}</strong>

              <span>{data?.user?.email}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}