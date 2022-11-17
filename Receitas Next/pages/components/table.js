import Link from 'next/link'
import styles from '../../styles/Main.module.css'
export default function Table(){
    
    return (
       <div>
          
          <table className={styles.table}>
            <tbody>
                <tr>
                    <th>Bebidas</th>
                    <th>Comidas</th>
                </tr>
                <tr>
                    <td>Vinho</td>
                    <td>Coxinha</td>
                </tr> 
                <tr>
                    <td>Agua</td>
                    <td>Mousse de Limão</td>
                </tr>
                <tr>
                    <td>Caipirinha</td>
                    <td>Sobremesa de Prestigio</td>
                </tr>     
            </tbody>
          </table>
       </div>

    )
 }