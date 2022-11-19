import { useRouter } from 'next/router'

export default function Movies({data}){
    return (
        <div>
            <div>
            <img src={data.Poster}></img><br/>
                {data.Title} --- {data.Year}
            </div>
            <a href='../movies3'>Movies2</a>
        </div>
    )    

}

export async function getServerSideProps(context){
    const { imdbID } = context.query;
    const res = await fetch("https://www.omdbapi.com/?apikey=9b30f837&i=" + imdbID)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}