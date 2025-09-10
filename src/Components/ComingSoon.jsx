import img from '../assets/comingSoon.jpg'

function ComingSoon() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <img src={img} alt="coming soon" className="img-fluid coming-soon-img"/>
        </div>
    )
}

export default ComingSoon;