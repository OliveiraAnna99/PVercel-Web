import useSWR from 'swr'

export default function Movies2(){

    const {data, error} = useSWR(`https://fake-movie-database-api.herokuapp.com/api?s=batman`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  ) }
        </div>
    )    

}



async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}