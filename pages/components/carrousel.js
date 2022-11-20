
import dynamic from 'next/dynamic'
const Title = dynamic(() => import('./text'), {
    suspense: true,
});
function Carrousel({data}){
    return(
        <div>
            <figure id="container">
                <div id="carouselExampleSlidesOnly" class="carrousel slide" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block h-40 w-100" src="https://e0.pxfuel.com/wallpapers/973/882/desktop-wallpaper-the-witcher-netflix-review-what-we-loved-and-hated.jpg"alt="First slide"/>
                            <figcaption> <Title/></figcaption>
                        </div>
                    </div>
                </div>
            </figure>
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
export default Carrousel;