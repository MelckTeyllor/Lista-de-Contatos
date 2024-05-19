import React, { useState } from "react";
import "./Lista.css";

function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  const [nome, setNome] = useState("");

  const [telefone, setTelefone] = useState("");

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);

      setNome("");

      setTelefone("");
    }
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>

      <div>
        <div>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
        </div>
        <div>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
        </div>

        <div className="btn">
        <button onClick={adicionarContato}>Adicionar Contato</button>
        </div>
      </div>

      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            <strong>{contato.nome}:</strong> {contato.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaContatos;
