import Link from 'next/link'
import styles from '../styles/Main.module.css'
export default function Principal(){

    return (
       <div>
          
          <h1>Nova Página</h1>
          <MariaPrea />
          <ButtonBack />
       </div>
    )
}
export function MariaPrea(){

   return (
      <h2>Morreu Maria Preá...</h2>
   )

}

export function ButtonBack(){
   return (
      <div className={styles.button}>
         <a href="/">Voltar a Página Inicial</a>
      </div>
   );
}