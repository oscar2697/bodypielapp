import Hero from "../components/Hero"
import NewLetter from "../components/NewLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"
import NewServicios from "../components/NewServicios"

const Home = () => {
    return (
        <>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewServicios/>
            <NewLetter/>
        </>
    )
}

export default Home
