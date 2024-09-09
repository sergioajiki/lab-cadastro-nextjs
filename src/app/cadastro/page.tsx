import EnderecoForm from "../components/EnderecoForm";
import PessoaForm from "../components/PessoaForm";

export default function Cadastro() {
    return(
        <div>
            <h2>Cadastro</h2>
            <h3>Pessoa</h3>
            <PessoaForm />
            <h3>Endereço</h3>
            <EnderecoForm />

        </div>
    )
}