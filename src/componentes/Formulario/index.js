import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        if (!time) { // Verifica se o campo time está vazio
            alert("Por favor, selecione um time!");
            return;
        }
        props.aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time,
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do pirata</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Informe o nome" exemplo="Luffy"valor = {nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Informe o cargo" exemplo="capitão" valor = {cargo} aoAlterado = {valor => setCargo(valor)}/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Insira o endereço da imagem" exemplo="https://......" valor = {imagem} aoAlterado = {valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label= "time" itens={props.nomesTimes} valor = {time} aoAlterado ={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario