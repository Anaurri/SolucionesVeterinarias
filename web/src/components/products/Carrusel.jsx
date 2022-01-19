import { Fragment, useContext } from "react";
import animal1 from '../../images/animal1.jpeg';
import animal2 from '../../images/animal2.jpeg';
import animal3 from '../../images/animal3.jpg';


function Carrusel() {
    return (
        <Fragment>
            <div className="carousel pt-5 pb-5 border-warning" >
                <div className="carousel-inner">
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                    <div className="carousel-item">
                        <img src={animal1}/>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                    <div className="carousel-item">
                    <img src={animal2}/>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                    <div className="carousel-item">
                    <img src={animal3}/>
                    </div>
                    <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                    <label for="carousel-2" className="carousel-control next control-1">›</label>
                    <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                    <label for="carousel-3" className="carousel-control next control-2">›</label>
                    <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                    <label for="carousel-1" className="carousel-control next control-3">›</label>
                    <ol className="carousel-indicators">
                        <li>
                            <label for="carousel-1" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-2" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-3" className="carousel-bullet">•</label>
                        </li>
                    </ol>
                </div>
            </div>
        </Fragment >
    );
}

export default Carrusel;
