import furnitureImg from "../assets/images/pexels-yankrukov-8867473.jpg";
import accessoriesImg from "../assets/images/pexels-yankrukov-7693745.jpg";
import appliancesImg from "../assets/images/pexels-yankrukov-7691715.jpg";
import artImg from "../assets/images/pexels-thirdman-7651922.jpg";

export default function BestDeals() {
  const deals = [
  {
    title: "Web Development",
    img: furnitureImg,
    count: "150+ Projects",
    className: "web-dev",
  },
  {
    title: "Mobile Apps",
    img: accessoriesImg,
    count: "89+ Projects",
    className: "mobile-apps",
  },
  {
    title: "E-commerce",
    img: appliancesImg,
    count: "200+ Stores",
    className: "ecommerce",
  },
  {
    title: "Digital Marketing",
    img: artImg,
    count: "95+ Campaigns",
    className: "marketing",
  },
];

  return (
    <section className="best-deals">
      <div className="container">
        <div className="top">
          <div>
            <h2>Our Expertise Areas</h2>
            <p>
              Discover our comprehensive range of digital solutions and technology services. 
              We specialize in transforming businesses through innovative web and mobile experiences.
            </p>
          </div>

          <a href="/services" className="header__btnS btn btn-secondary">
            View All Services <span>
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17L8 15C8 12.7909 9.79086 11 12 11L17 11" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8L17 11L14 14" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
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
                <b><svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m23.8125 745.28125c-.46695.0551-.823.4979-.8125 1.09375v16c.00005.52358.47642.99995 1 1h3.59375l2.6875 2.6875c.29466.29526.78338.37451 1.15625.1875l1-.5c.32794-.15944.55359-.51046.5625-.875v-3.59375l2.71875-2.71875c.36548-.36968.36548-1.03657 0-1.40625l-11-11.5c-.3075-.3075-.62608-.40806-.90625-.375z" filter="url(#a)" opacity=".2" transform="matrix(.52729052 .52729052 -.52729052 .52729052 394.479914 -402.08617)" />
    <path d="m67.488968 743.68351-6.122935 14.78208c-.20032.48374.05749 1.10615.541196 1.30656 0 0 4.069006.32223 3.907773.30318l.866883 4.58348c.15924.38554.58043.64578.996483.6157l1.115219-.0571c.363992-.0218.706795-.25976.85453-.59314l.973624-4.63669 3.953865-.17698c.47913-.20168.734338-.8178.538149-1.29921l-5.761816-14.83413c-.443775-1.07137-1.513658-.88092-1.862971.006z" />
    <path d="m62.294818 758.83643 6.122935-14.78208 5.761815 14.83414-4.321335.32919-1.106991 5.0562-1.137317.013-1.036007-4.99178z" fill="currentcolor" />
</svg></b>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
