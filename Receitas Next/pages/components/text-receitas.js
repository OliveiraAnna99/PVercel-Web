import dynamic from 'next/dynamic';
import styles from '../../styles/Main.module.css';


const Receita1 = dynamic(() => import('../receitas/receita01'), {
  suspense: true,
});

const Receita2 = dynamic(() => import('../receitas/receita02'), {
  suspense: true,
});
function BlockIntroReceita(){
    return(
      <div className={styles.receita}>
            <Receita1 />
            <Receita2 />
      </div>
    )
}

export default BlockIntroReceita;