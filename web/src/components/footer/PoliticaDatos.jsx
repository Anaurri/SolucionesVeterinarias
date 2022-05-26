import { Fragment } from 'react';

function PoliticaDatos() {
    return (
        <Fragment>
            <div id='footer' className="p-4 footer2"  >
                <div className="row row-cols-1" style={{paddingLeft:"10%" , paddingRight:"10%"}}  >
                    <div className="col">
                        <div className="container row"  style={{ borderLeft: '2px solid antiquewhite' }} >
                                <p><small>AVISO LEGAL / POLÍTICA DE PRIVACIDAD SEGÚN LEY ORGÁNICA 3/2018 DE 5 DEL DICIEMBRE DE 2018:</small></p>
                                <p><small><em>Este portal-web sólo usa cookies imprescindibles para su correcto funcionamiento en los navegadores del usuario final. No son  utilizadas cookies de cualquier otro tipo. Este portal-web no recopila ninguna información sobre los usuarios que la consulten.</em></small></p> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )

}
export default PoliticaDatos;