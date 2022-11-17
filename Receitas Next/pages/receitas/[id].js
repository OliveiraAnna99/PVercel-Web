
/* Pege os caminhos */
export async function getStaticPaths(){
    return {
        paths: [
        {
            params:{
                id: '1',
            }
        },
        {
            params:{
                id: '2',
            }
        },
        {
            params:{
                id: '3',
            }
        },
        {
            params: {
                id: '4',
            }
        },
        {
            params: {
                id: '5',
            }
        }], /* que paginas eu quero gerar antecipadamento*/
         fallback: 'blocking'

    }

}
export async function getStaticProps(context){
    const id = context.params.id;
    return{
        props:{
            id: id
        }
    }
}
function Receitas(props){
   
    return(
        <div>
             <center><h1>Receita {props.id}</h1></center>
        </div>
    );
}

export default Receitas;