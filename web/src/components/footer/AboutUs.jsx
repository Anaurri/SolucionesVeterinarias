
import { Fragment } from 'react';

function AboutUs() {
    return (
        <Fragment>
            <div id='footer' className="p-4 navAndFooter"  >

                <div className="row row-cols-2"  style={{paddingLeft:"10%" , paddingRight:"10%"}}  >
                    <div className="col">
                        <div className="container row" style={{ borderLeft: '2px solid antiquewhite' }} >
                            <address>
                                <strong>Soluciones Veterinarias SLU</strong><br />
                                Paseo Ezequiel González,<br />
                                40002, Segovia<br />
                                <abbr title="Phone"></abbr><i className=" fa fa-phone"></i>  639673394
                            </address>

                            <address>
                                <a href="mailto:solucionesveter@gmail.com" style={{ color: 'white' }} >solucionesveter@gmail.com</a>
                            </address>
                        </div>

                    </div>
                    <div className="col">
                        <div className="container row" style={{ borderLeft: '2px solid antiquewhite' }} >
                            <address>

                                <strong><i class="fa fa-calendar"></i> Horario tienda:</strong>
                                <address>De Lunes a Viernes<br />
                                10:00-14:00H 17:00-19:30H</address>
                            </address>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )

}
export default AboutUs;

