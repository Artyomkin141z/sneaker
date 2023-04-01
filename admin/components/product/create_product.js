import styles from '../../styles/cmp_product_create_product.module.css';

import {useState} from 'react';

import UIInput from '../UI/ui_input';
import UITextarea from '../UI/ui_textarea';

export default function CreateProduct(){
    const [productData, setProductData] = useState({
        name: '',               //Название
        description: '',        //Описание
        code: '',               //Код товара
        details: {
            gender: '',         //Пол
            //color: '',        //Цвета
            purpos: '',         //Предназначения
            country: '',        //Страна производитель
            materials: '',      //Материалы
            idBrand: ''         //ID бренда
        },
        images: {
            url: '',            //Адрес картинки
            order: 0,           //Порядок картинки
        },
        types: {
            color: '',          //Цвет
            size: '',           //Размер
            retailPrice: 0,     //Розничная цена
            images: {
                url: '',        //Адрес картинки
                order: 0,       //Порядок картинки
            },
        },
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setProductData({
          ...productData,
          [name]: value
        });
        console.log(productData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // TODO: submit form data to server
    }

    return(
        <div className={styles.container}> 
            <form onSubmit={handleSubmit}>
                <UIInput 
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    value={productData.name}
                    onChange={handleInputChange}
                    label="Название:"
                />  
                <UIInput
                    type="text"
                    id="code"
                    name="code"
                    placeholder=" "
                    value={productData.code}
                    onChange={handleInputChange}
                    label="Код товара:"
                />
                <UITextarea 
                    id="description"
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    label="Описание:"
                />
                <div className={styles.input__container}> 
                    <select
                        id="gender"
                        name="gender"
                        value={productData.details.gender}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Выбрать пол</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                        <option value="child">Детское</option>
                    </select>
                    <label htmlFor="gender">Пол:</label>
                </div>
                <UIInput
                    type="text"
                    id="purpos"
                    name="purpos"
                    placeholder=" "
                    value={productData.details.purpos}
                    onChange={handleInputChange}
                    label="Предназначение:"
                />
                <UIInput
                    type="text"
                    id="materials"
                    name="materials"
                    placeholder=" "
                    value={productData.details.materials}
                    onChange={handleInputChange}
                    label="Материалы:"
                />
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}