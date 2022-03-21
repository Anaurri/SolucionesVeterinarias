
import { Fragment } from 'react';

function AboutUs() {
    return (
        <Fragment>
                  <div className="p-5 navAndFooter"  >

                    <div className="container row" style={{borderLeft: '2px solid antiquewhite'}} >
                        <address>
                            <strong>Soluciones Veterinarias SLU</strong><br />
                            Paseo Ezequiel González,<br />
                            40002, Segovia<br />
                            <abbr title="Phone"></abbr>639673394
                        </address>

                        <address>
                            <a href="mailto:solucionesveter@gmail.com" style={{color: 'white'}} >solucionesveter@gmail.com</a>
                        </address>
                </div>

                </div>
        </Fragment>

    )

}
export default AboutUs;

