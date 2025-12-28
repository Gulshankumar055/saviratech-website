export default function BestDeals() {
  const deals = [
  {
    title: "Furniture",
    img: "./src/assets//images/pexels-yankrukov-8867473.jpg",
    count: "6 Product",
    className: "furniture",
  },
  {
    title: "Accessories",
    img: "./src/assets//images/pexels-yankrukov-8837716.jpg",
    count: "12 Product",
    className: "accessories",
  },
  {
    title: "Home Appliances",
    img: "./src/assets//images/pexels-yankrukov-7691715.jpg",
    count: "11 Product",
    className: "appliances",
  },
  {
    title: "Art & Crafts",
    img: "./src/assets//images/pexels-thirdman-7651922.jpg",
    count: "10 Product",
    className: "art",
  },
];

  return (
    <section className="best-deals">
      <div className="container">
        <div className="top">
          <div>
            <h2>Best deals</h2>
            <p>
              Explore our curated range of top-tier products. discover the perfect
              fit for any occasion or lifestyle.
            </p>
          </div>

          <a href="#" className="header__btnS btn btn-secondary">
            View all categories <span>↗</span>
          </a>
        </div>

        <div className="grid">
          {deals.map((d, i) => (
            <a key={i} className={`card ${d.className}`}>
            <img src={d.img} alt={d.title} />
              <div className="overlay">
                <div>
                  <h3>{d.title}</h3>
                  <span>{d.count}</span>
                </div>
                <b>↗</b>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
