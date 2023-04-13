export default function Menu(){
    return(
        <nav className="bg-gray-100 w-60 fixed top-0 left-0 h-screen pt-16 px-5">
            <ul className="pt-3">
                <h3>Главная</h3>
                <li className="pl-5">Заказы</li>
                <li className="pl-5">Клиенты</li>
            </ul>
            <ul className="pt-3">
                <h3>Магазин</h3>
                <li className="pl-5">Товары</li>
                <li className="pl-5">Поставки</li>
                <li className="pl-5">Поставщики</li>
            </ul>
            <ul className="pt-3">
                <h3>Фильтры</h3>
                <li className="pl-5">Категории</li>
                <li className="pl-5">Метки</li>
                <li className="pl-5">Бренды</li>
            </ul>
        </nav>
    )
}