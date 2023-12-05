import React, { useState } from 'react';
import { postService } from '../services/PostService';

export default function RegisterPost() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const onSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await postService.savePost({
            "title": title,
            "description": description
        })
        const STATUS_CREATED = 201
        if(result == STATUS_CREATED) {
            alert('Criado com sucesso!');
        }
    };

    return (
        <>
            <h1>Cadastrar Post</h1>
            <form onSubmit={onSave}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <input type="submit" value="Salvar" />
            </form>
        </>
    );
}
