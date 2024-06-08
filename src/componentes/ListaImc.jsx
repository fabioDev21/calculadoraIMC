import classesList from "./ListaImc.module.css"

const ListaImc = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Obesidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Menor que 18,5</td>
                    <td>Magreza</td>
                    <td>0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td>0</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Entre 25 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Entre 30 e 39,9</td>
                    <td>Obesidade</td>
                    <td>II</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade grave</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListaImc