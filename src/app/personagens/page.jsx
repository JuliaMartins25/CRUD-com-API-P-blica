"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const STORAGE_KEY = "comments_salvo_na_sessionStorage";

export default function Get() {
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);
    const router = useRouter();

    const buscarComments = async () => {
        setLoading(true);
        try {
            // Verifica se já existe algo salvo no sessionStorage
            const sessionStorageData = sessionStorage.getItem(STORAGE_KEY);

            // Se existir, usa o que está salvo. Se não, faz a requisição e salva no sessionStorage
            if (sessionStorageData) {
                setComments(JSON.parse(sessionStorageData));
            } else {
                // Se não tiver nada salvo, faz a requisição
                const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(response.data);
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
            }
        } catch (error) {
            setError(true);
            console.error("Erro ao buscar comentários:", error);
        } finally {
            setLoading(false);
        }
    };

    // Ir para página de detalhes
    const navegarParaComentario = (commentId) => {
        router.push(`/get/${commentId}`);
    };

    // Limpar sessionStorage, casso que queira forçar uma nova requisição
    const limparSessionStorage = () => {
        sessionStorage.removeItem(STORAGE_KEY);
        setComments([]);
    };

    // Busca automática quando a página carrega
    useEffect(() => {
        buscarComments();
    }, []);

    return (
        <div>
            <h1>Lista de Comentários</h1>

            <button onClick={limparSessionStorage}>Limpar SessionStorage</button>
            <button onClick={buscarComments}>Recarregar</button>

            <h2>Comentários ({comments.length})</h2>

            {loading && <p>Carregando...</p>}
            {error && <p>Erro ao buscar os comentários</p>}

            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} onClick={() => navegarParaComentario(comment.id)}>
                        <hr />
                        <p>
                            <strong>ID:</strong> {comment.id}
                        </p>
                        <p>
                            <strong>Nome:</strong> {comment.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
