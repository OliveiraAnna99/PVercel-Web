import dynamic from 'next/dynamic'
import styles from '../styles/Main.module.css'
import Calculadora from './calculadora';
import {Pet} from './virtual-pet';

const Table = dynamic(() => import('./components/table'), {
   suspense: true,
});



const Navbar = dynamic(()=> import('./components/navbar'),{
   suspense: true, 
});


const Block1 = dynamic(()=> import('./components/text-receitas'),{
   suspense: true, 
});


function Receitas({Component}){

    return (
     
            <div className={styles}>
               
                 <Navbar />
                 <Block1/>
             
            </div>
           
     
    )
 }
 
 export default Receitas;