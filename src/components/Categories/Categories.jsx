import "./Categories.css";

function Categories() {

  const categories = [
    {
      name: "Dining",
      image: "/assets/images/Categories/Dining.png"
    },
    {
      name: "Living",
      image: "/assets/images/Categories/Living.png"
    },
    {
      name: "Bedroom",
      image: "/assets/images/Categories/Bedroom.png"
    }
  ];

  return (
    <section className="categories">

      <div className="category-heading">

        <h2>Browse The Range</h2>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

      </div>

      <div className="category-container">

        {categories.map((category) => (

          <div className="category-card" key={category.name}>

            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;