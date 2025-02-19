
import './style.css';

import carTopImg from '../../assets/car-card.png'

export default function CardCarTop() {

    return (
        <section className="top-card-container">
        
        <div className="top-card-title">
            <h3>Venha nos visitar</h3>
        </div>
        <div className="top-card-content">
            <img src={carTopImg} alt="car" />
            <p>Lorem ipsum dolo</p>
        </div>
        
        <div className="top-card-content">
            <img src={carTopImg} alt="car" />
            <p>Lorem ipsum dolo</p>
        </div>

        </section>

    );
}