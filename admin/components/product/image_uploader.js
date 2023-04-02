import React, { useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const ImageUploader = () => {
    const onDrop = useCallback((acceptedFiles) => {
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        axios.post("/api/upload", formData).then((response) => {
            console.log(response.data);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
    <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
            <p>Перетащите файл сюда...</p>
        ) : (
            <p>Выберите файл, перетащите его сюда или введите URL</p>
        )}
    </div>
    );
};

export default ImageUploader;
