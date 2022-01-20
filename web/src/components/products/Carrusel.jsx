import { Fragment, useContext } from "react";
import animal1 from '../../images/huellas_kiko2.jpg';
import animal2 from '../../images/tienda2.jpg';
import animal3 from '../../images/fidel_vaca2.jpg';
import animal4 from '../../images/lucky2.jpg';
import animal5 from '../../images/perro.jpg';



function Carrusel() {
    return (
        <Fragment>
            <div className="container mt-5 pt-5 pb-5">
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
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
        </Fragment >
    );
}

export default Carrusel;
