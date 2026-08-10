import "./Gallery.css";

function Gallery() {

  const images = [
    "pic-1.png",
    "pic-2.png",
    "pic-3.png",
    "pic-4.png",
    "pic-5.png",
    "pic-6.png",
    "pic-7.png",
    "pic-8.png",
    "pic-9.png"
  ];

  return (

    <section className="gallery">

      <div className="gallery-heading">

        <p>Share your setup with</p>

        <h2>#FuniroFurniture</h2>

      </div>

      <div className="gallery-container">

        {images.map((image) => (

          <img
            key={image}
            src={`/assets/images/Gallery/${image}`}
            alt="Furniture"
          />

        ))}

      </div>

    </section>
  );
}

export default Gallery;