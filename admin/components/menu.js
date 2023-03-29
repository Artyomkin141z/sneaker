import styles from '../styles/menu.module.css'

import Link from 'next/link'

export default function Menu() {
    return (
    <div className={styles.menu}>
        <div className={styles.container}>
            <h3>Главная</h3>
            <ul>
                <li>Карточки товара</li>
                <li><Link href='/product'>Товар</Link></li>
                <li>Категории</li>
                <li>Метки</li>
            </ul>
        </div>
        <div className={styles.container}>
            <h3>Компоненты</h3>
            <ul>
                <li>Просмотреть</li>
                <li>Создать</li>
                <li>Редактировать</li>
            </ul>
        </div>
        <div className={styles.container}>
            <h3>Склад</h3>
            <ul>
                <li>Товары</li>
            </ul>
        </div>
        <div className={styles.container}>
            <h3>Поставки</h3>
            <ul>
                <li>Новая поставка</li>
                <li>История</li>
            </ul>
        </div>
    </div>
    )
}