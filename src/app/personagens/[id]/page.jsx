"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const STORAGE_KEY = "comments_salvo_na_sessionStorage";

export default function GetByID() {
    const [comment, setComment] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const params = useParams();
    const commentId = params.id;

    useEffect(() => {
        const buscarComentario = async () => {
            try {
                // Simula uma chamada assíncrona para buscar o comentário
                const sessionStorageData = sessionStorage.getItem(STORAGE_KEY);

                // Primeiro tenta buscar no sessionStorage
                if (sessionStorageData) {
                    // Parseia os dados salvos
                    const comments = JSON.parse(sessionStorageData);
                    // Tenta encontrar o comentário pelo ID
                    const comentarioEncontrado = comments.find((c) => c.id === parseInt(commentId));

                    // Se encontrou, usa ele
                    if (comentarioEncontrado) {
                        setComment(comentarioEncontrado);
                        return;
                    }
                }

                // Se não encontrou no sessionStorage, busca da API
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/comments/${commentId}`
                );
                setComment(response.data);

                // Salva no sessionStorage
                const commentsAtuais = sessionStorageData ? JSON.parse(sessionStorageData) : [];
                // Adiciona o novo comentário à lista atual
                const commentsAtualizados = [...commentsAtuais, response.data];
                // Evita duplicatas
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(commentsAtualizados));
            } catch (error) {
                setError(true);
                console.error("Erro ao buscar comentário:", error);
            }
        };

        // Chama a função para buscar o comentário
        buscarComentario();
    }, [commentId]);

    // Função para navegar de volta para a lista
    const voltarParaLista = () => {
        router.push("/get");
    };

    if (error) return <p>Erro ao buscar comentário</p>;
    if (!comment) return <p>Carregando...</p>;

    return (
        <div>
            <button onClick={voltarParaLista}>Voltar para Lista</button>

            <h1>Detalhes do Comentário</h1>

            <p>
                <strong>ID:</strong> {comment.id}
            </p>
            <p>
                <strong>Post ID:</strong> {comment.postId}
            </p>
            <p>
                <strong>Nome:</strong> {comment.name}
            </p>
            <p>
                <strong>Email:</strong> {comment.email}
            </p>
            <p>
                <strong>Comentário:</strong> {comment.body}
            </p>
        </div>
    );
}
