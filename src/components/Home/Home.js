import './Home.css';

function Home () {
    return(
        <div className="hero">
            <img src={process.env.PUBLIC_URL + 'dogs1.jpg'} alt="doggo"/>
        </div>
    )
}
export default Home;