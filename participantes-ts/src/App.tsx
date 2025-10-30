import { useState } from "react";
import "./App.css";

type Participante = {
  id: number;
  nome: string;
  idade: number;
};

type Filtro = "todos" | "maiores" | "menores";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<string>("");
  const [lista, setLista] = useState<Participante[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const adicionar = () => {
    if (!nome.trim() || !idade.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const idadeNum = Number(idade);
    if (isNaN(idadeNum)) {
      alert("Digite uma idade válida!");
      return;
    }

    const novo: Participante = {
      id: Date.now(),
      nome: nome.trim(),
      idade: idadeNum,
    };

    
    setLista((prev) => [...prev, novo]);
    limpar();
  };

  const limpar = () => {
    setNome("");
    setIdade("");
  };

  const remover = (id: number) => {
    setLista((prev) => prev.filter((p) => p.id !== id));
  };

  const participantesFiltrados = lista.filter((p) => {
    if (filtro === "maiores") return p.idade >= 18;
    if (filtro === "menores") return p.idade < 18;
    return true;
  });

  const totalMaiores = lista.filter((p) => p.idade >= 18).length;

  return (
    <div className="container">
      <h1>Cadastro de Participantes</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          adicionar();
        }}
      >
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={limpar}>
          Limpar
        </button>
      </form>

      <div className="filters">
        <button onClick={() => setFiltro("todos")}>Todas</button>
        <button onClick={() => setFiltro("maiores")}>Maiores</button>
        <button onClick={() => setFiltro("menores")}>Menores</button>
      </div>

      <ul>
        {participantesFiltrados.map((p) => (
          <li key={p.id} className="participant">
            <span>
              {p.nome} - {p.idade} anos{" "}
              <span
                className={`badge ${p.idade >= 18 ? "maior" : "menor"}`}
              >
                {p.idade >= 18 ? "Maior" : "Menor"}
              </span>
            </span>
            <button onClick={() => remover(p.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <div className="count">
        Total: {lista.length} | Maiores de idade: {totalMaiores}
      </div>
    </div>
  );
}