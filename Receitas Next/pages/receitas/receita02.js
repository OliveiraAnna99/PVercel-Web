
import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'
import {FormSoma} from '../elementos/form-soma';
import {FormFatorial} from '../elementos/form-soma';
function Receita2(){
    return(
        <div>
            
          <div className={styles.introReceita}>
            <h1 className={styles.titleReceita}>Receita 02</h1>
            <h6> 1. Criando novos componentes e novas páginas em subdiretórios</h6>
            <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo2}>
                Para realizar esse exercicio, um subdiretório chamado de 'elementos' foi criado dentro da 
                pasta 'pages' e dentro dele foram criadas, novas funções que exibiremos nessa tela, afim de 
                verificar se nossa atividade foi bem sucedida. Criamos o arquivo 'form-soma.js' dentro desse 
                subdiretório e nela criamos um componente input, com toda a estilização necessária pra que
                esse elemento fique minimamente agradável
              </p>
            
            </div>
            <div className={styles.form}>
              <FormSoma/>
    
            </div>
          </div>

          <div className={styles.introReceita}>
        
            <h6> 2. Fazendo a página utilizar um component de um arquivo diferente</h6>
          
              <div className={styles.contentCalc}>
                <br></br>
                <p className={styles.textInfo2}>
                  Nesse caso, faremos o seguinte, criaremos uma função em outro arquivo que realizará essa soma a partir da 
                  questão anterior e tudo que você precisará fazer é clicar no botão soma que também foi criado nesse mesmo 
                  arquivo separado a qual estamos no referindo
                  
                </p>
                
              </div>
              <h6> 3. Crie um novo componente ou utilize algum componente já criado e passe alguns parametros.
              </h6>
        
          <div className={styles.contentCalc}>
            <br></br>
            <p className={styles.textInfo2}>
              Nesse caso, criamremos um novo componente dentro da pasta "elementos", como fizemos com a função de soma, no "form-soma", montamos a estrutura de
              um novo form que utilizará o Props como parametro, ele se chamará de 'FormFatorial', na div onde o resultado seria exibido passamoso "props.name" 
              ao invés do id, sendo assim esse será substituído pelo parametro para passado através do
                o "FormFatorial name ='resultado'", nesse exemplo aqui ele vai interpretar o id como sendo 'resultado'
                pois foi esse o parametro que passamos pro componente
            </p>
          
          </div>
          <div className={styles.form}>
              <FormFatorial name ='resultado'/>
              
    
          </div>
          
          </div>
      </div>

    );
}

export default Receita2;