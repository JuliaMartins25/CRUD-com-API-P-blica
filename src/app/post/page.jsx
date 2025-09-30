"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const STORAGE_KEY = "comments_salvo_na_sessionStorage";

export default function Post() {
    const [loading, setLoading] = useState(false);
    const [addedComment, setAddedComment] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        body: "",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        // Carrega os comentários salvos no sessionStorage ao montar o componente
        const sessionStorageData = sessionStorage.getItem(STORAGE_KEY);
        // Se houver dados salvos, atualiza o estado
        if (sessionStorageData) {
            setAddedComment(JSON.parse(sessionStorageData));
        }
    }, []);

    // Função para criar um novo comentário
    const criarNovoComment = async () => {
        setLoading(true);
        setError(false);

        try {
            // Cria um novo comentário
            const response = await axios.post("https://jsonplaceholder.typicode.com/comments", {
                name: form.name.trim(),
                email: form.email.trim(),
                body: form.body.trim(),
            });

            // Atualiza a lista de comentários adicionados
            const sessionStorageData = sessionStorage.getItem(STORAGE_KEY);
            // Mantém os comentários existentes e adiciona o novo no início
            const commentsAtuais = sessionStorageData ? JSON.parse(sessionStorageData) : [];
            // Adiciona o novo comentário no início da lista
            const commentsAtualizados = [response.data, ...commentsAtuais];

            // Salva no sessionStorage
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(commentsAtualizados));
            // Atualiza o estado local
            setAddedComment(commentsAtualizados);
            // Limpa o formulário
            setForm({ name: "", email: "", body: "" });
        } catch (error) {
            setError(true);
            console.error("Erro ao criar comentário:", error);
        } finally {
            setLoading(false);
        }
    };

    // Função para atualizar o formulário
    const atualizarForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <h1>Criar Comentário</h1>

            <div>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={atualizarForm}
                    placeholder="Nome"
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={atualizarForm}
                    placeholder="Email"
                />
                <br />
                <textarea
                    name="body"
                    value={form.body}
                    onChange={atualizarForm}
                    placeholder="Comentário"
                    rows="3"
                />
                <br />
                <button onClick={criarNovoComment} disabled={!form.name.trim() || loading}>
                    {loading ? "Criando..." : "Criar Comentário"}
                </button>
            </div>

            {error && <p>Erro ao criar comentário</p>}

            <h2>Comentários Criados ({addedComment.length})</h2>
            <ul>
                {addedComment.map((comment, index) => (
                    <li key={comment.id || index}>
                        <hr />
                        <p>
                            <strong>ID:</strong> {comment.id}
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
                    </li>
                ))}
            </ul>
        </div>
    );
}

