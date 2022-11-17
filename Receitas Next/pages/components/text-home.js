import dynamic from 'next/dynamic';
import styles from '../../styles/Main.module.css';
const Circle = dynamic(() => import('./elements-home'), {
  suspense: true,
});
function TitleHome(){
    return(
        <div className={styles.introHome}>
          <h4 className={styles.cabecalhoHome}>BEM VINDO</h4>
          <h1 className={styles.titleHome}>NEXT JS</h1>
          <h6 className={styles.subtitleHome}>Programação Web - Receitas de Next JS</h6>
          <Circle/>
        </div>
    )
}

export default TitleHome;