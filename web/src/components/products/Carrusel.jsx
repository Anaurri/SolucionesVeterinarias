import { Fragment, useContext } from "react";
import animal1 from '../../images/huellas_kiko.jpg';
import animal2 from '../../images/tienda1.png';
import animal3 from '../../images/fidel_vaca.jpg';
import animal4 from '../../images/lucky.jpg';
import animal5 from '../../images/perro1.jpg';



function Carrusel() {
    return (
            <div className="container d-flex justify-content-center pb-3" >
                <div id="carouselExampleIndicators" className="carousel slide" style={{width: "950px"}} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={animal1} className="d-block w-100 border-right-0 border-primary rounded" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={animal2} className="d-block w-100 border-right-0 border-primary rounded" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={animal3} className="d-block w-100 border-right-0 border-primary rounded" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={animal4} className="d-block w-100 border-right-0 border-primary rounded" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={animal5} className="d-block w-100 border-right-0 border-primary rounded" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    );
}

export default Carrusel;
