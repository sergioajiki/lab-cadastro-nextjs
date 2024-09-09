import EnderecoForm from "../components/EnderecoForm";
import PessoaForm from "../components/PessoaForm";
import PessoaList from "../components/PessoaList";

export default function Cadastro() {
    return(
        <div>
            <h2>Cadastro</h2>
            <h3>Pessoa</h3>
            <PessoaForm />
            <h3>Endereço</h3>
            <EnderecoForm />
            <h2>Listas</h2>
            <PessoaList />

        </div>
    )
}