import './style.css'
import image1 from '../../assets/big picture.jpg'
import image2 from '../../assets/code landscape.jpg'
import image3 from '../../assets/code landscape1.jpg'
import image4 from '../../assets/code landscape2.jpg'

const Project = () => {
    return (
        <div className="project-page">
            <div className="text-zone">
                <h1>Projectscccccccccccccccccccccccccccccccccccccccc!</h1>
                <div className="img">
                    <img src={image1}className="pic1" />
                    <img src={image2}className="pic2" />
                    <img src={image3}className="pic3" />
                    <img src={image4}className="pic4" />
                </div>
            </div>
        </div>
    )
}

export default Project