import dynamic from 'next/dynamic';
import styles from '../styles/Main.module.css';

function Pet(){
    return(
        <div className={styles.gifAnimate}>
             <img className={styles.gif} src="../lobo.gif"></img>
        </div>
    );
}

export {Pet}; 