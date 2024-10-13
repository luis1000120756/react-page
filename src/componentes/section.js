import React from "react";
import '../componentes/section.css'

function Section(){
    return(
        <div className="container">
        <div className="row">
          <div className="col s12 m4"> {/* Cambia el tamaño de la columna según lo necesites */}
            <div className="card">
              <div className="card-image">
                <img src={require(`../imagenes/dos.jpg`)} alt="Sample 1" />
                <span className="card-title">Card Title 1</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
          </div>
  
          <div className="col s12 m4"> {/* Columna para otra tarjeta */}
            <div className="card">
              <div className="card-image">
                <img src={require(`../imagenes/dos.jpg`)} alt="Sample 2" />
                <span className="card-title">Card Title 2</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <p>This is another card with some content.</p>
              </div>
            </div>
          </div>
  
          <div className="col s12 m4"> {/* Columna para otra tarjeta */}
            <div className="card">
              <div className="card-image">
                <img src={require(`../imagenes/dos.jpg`)} alt="Sample 3" />
                <span className="card-title">Card Title 3</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <p>Yet another simple card with interesting content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Section;