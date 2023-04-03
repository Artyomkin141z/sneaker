import styles from '../styles/menu.module.css'

import Link from 'next/link'

export default function Menu() {
    //
    return (
    <div className={styles.menu}>
        <div className={styles.container}>
            <h3>Главная</h3>
            <ul>
                <li>Авторизация</li>
                <li><Link href='/product'>Добавить товар</Link></li>
                <li>Саздать категории</li>
                <li>Создать метки</li>
                <li>Создать бренд</li>
                <li>Создать клиента</li>
                <li>Создать заказ</li>
                <li>Заказы</li>
            </ul>
        </div>
    </div>
    )
}