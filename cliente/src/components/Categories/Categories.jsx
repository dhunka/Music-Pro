import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://www.superprof.cl/blog/wp-content/uploads/2017/02/caracteristicas-guitarra.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/productos/1">
              Bajos
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://lh3.googleusercontent.com/wd4bRdVEoO4IZJq9IHzWhBQyivAj_VFzegG2bHc8W9D4aX4OtCbe9M_tFv5kfI57lxgqyxZu0lKuE7zS3WyP8EnPCUq_BHVDbRt30rRpZIcw2we6zu5NVtM8V-tke0Ljt4BKnk_fF6-NtXmamj5iVbw"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Teclados 
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://www.escuelaacordes.com/sites/default/files/styles/large_retina/public/portfolio/Bateria.jpg?itok=HtzeuvOj"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            Baterias y Percusion
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://www.musisol.com/blog/wp-content/uploads/2020/12/A_pickguard-scaled.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Guitarras Acusticas 
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://img.freepik.com/fotos-premium/closeup-guitarra-electrica-negra-sobre-fondo-oscuro_169016-20245.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Guitarras Electricas 
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://www.semana.com/resizer/ucsruuXHws_80OjZHxvgPMKFcSs=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BNZ4D7SPLFEITNV4US3O6XVUAA.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Ofertas  
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;