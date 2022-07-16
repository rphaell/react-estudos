import "./style.css";



const Motivo = ({title, description, image, altImage, classStyle}) => {
  const zoomIn = (event) => {
    const { target: img } = event;
    img.style = "transform: scale(1.01); cursor:pointer; transition:1s all;";
  }

  const zoomOut = (event) => {
    const { target: img } = event;
    img.style = "transform: scale(1); cursor:pointer; transition:1s all;";
  }

  return (
    <section className={classStyle}>
      <div>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
      <div>
        <img src={image} alt={altImage} onMouseOver={zoomIn} onMouseOut={zoomOut} />
      </div>
    </section>
  );
}

export default Motivo;





