const featured = [
  {
    cover:
      "https://raw.githubusercontent.com/sunil9813/Real-estate-website/master/public/images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover:
      "https://raw.githubusercontent.com/sunil9813/Real-estate-website/master/public/images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover:
      "https://raw.githubusercontent.com/sunil9813/Real-estate-website/master/public/images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover:
      "https://raw.githubusercontent.com/sunil9813/Real-estate-website/master/public/images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover:
      "https://raw.githubusercontent.com/sunil9813/Real-estate-website/master/public/images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export default function FeaturedCard() {
  return (
    <>
      <div className="content grid5 mtop flex justify-around p-12">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
}
