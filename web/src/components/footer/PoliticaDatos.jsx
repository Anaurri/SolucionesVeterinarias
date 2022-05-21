
import { Fragment } from 'react';

function PoliticaDatos() {
    return (
        <Fragment>
            <div id='footer' className="p-4 footer2"  >
                <div className="row row-cols-2" style={{paddingLeft:"10%" , paddingRight:"10%"}}  >
                    <div className="col">
                        <div className="container row"  style={{ borderLeft: '2px solid antiquewhite' }} >
                            <address>
                                <strong>Política de Datos</strong>
                            </address>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container row"  style={{ borderLeft: '2px solid antiquewhite' }} >
                            <address>
                                <strong>Aviso Legal</strong>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )

}
export default PoliticaDatos;

