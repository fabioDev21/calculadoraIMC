import { useState } from "react";
import classes from './Formulario.module.css'
import ListaImc from "./ListaImc";


const Formulario = () => {
    
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [formOk, setFormOk] = useState();
    
    const cleanValuesFunction = () => {
        setAltura("")
        setPeso("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setAltura(altura.replace(",","."))
        setFormOk(true)
    }

    const calculoImc = (peso, altura) => {
        const imc = ((peso / altura) / altura).toFixed(2)

        if(isNaN(imc)){
            return "0.00"
        }
        return imc
    }

    const validaSituacaoImc = (imc) => {
        let situacao = ""

        if(imc <= 18.5){
            situacao = "Magreza"
        } else if(18.5 <= imc && imc <= 24.9 ){
            situacao = "Normal"
        } else if(24.9 <= imc && imc<= 29.9){
            situacao = "Sobrepeso"
        } else if(30 <= imc && imc <= 39.9){
            situacao = "Obesidade"
        } else if(imc >= 40){
            situacao = "Obesidade grave"
        }
        return situacao;
    }



    return (
        <div className={classes.container}>
            <form className={formOk ? classes.dontResult:classes.forms} onSubmit={handleSubmit} >
                <label>
                    <span>Altura: </span>
                    <input
                    required 
                    type="text" 
                    placeholder="Exemplo 1,60"
                    onChange={(e) => setAltura(e.target.value)}
                    value={altura || ""}/>
                </label>
                <label>
                    <span>Peso: </span>
                    <input
                    required 
                    type="text" 
                    placeholder="Exemplo 60,5"
                    onChange={(e) => setPeso(e.target.value)}
                    value={peso || ""}/>
                </label>
                <input
                type="submit" 
                value="Calcular" 
                className={classes.calcBtn}/>
                <input 
                type="button" 
                value="Limpar" 
                onClick={cleanValuesFunction} 
                className={classes.charmBtn}/>
            </form>
            <div className={formOk ? classes.result: classes.dontResult}>
                <div>
                    <h2>Seu IMC é: 
                        <span className={classes.relationalImc}>
                            {calculoImc(peso,altura)}
                        </span>
                    </h2>
                    <p>Situação atual: 
                        <span className={classes.relationalImc}>{validaSituacaoImc(calculoImc(peso,altura))}</span> </p>
                    <h4>Confira as classificações abaixo</h4>
                    <ListaImc />
                    <button className={classes.charmBtn} onClick={() => setFormOk(false)}>Voltar</button>
                </div>
            </div>
        </div>
    );
};

export default Formulario;
