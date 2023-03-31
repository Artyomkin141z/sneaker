import styles from '../../styles/ui_textarea.module.css';

import { useState } from 'react';

export default function UITextarea({id, name, value, onChange, label}){
    const [content, setContent] = useState('');

    function handleChange(event) {
        setContent(event.target.value);
        //event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }

    return(
        <div className={styles.textarea__container}>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={(event)=>{
                    handleChange(event);
                    onChange(event);
                }}
                required
            />
            <label htmlFor="message">{label}</label>
        </div> 
    )
}