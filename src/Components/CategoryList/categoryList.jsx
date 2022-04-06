const CategoryList = ({ categories: { categoryName, img } }) => {
  return (
    <a href="/Components-E-Com/shopNow.html">
      {" "}
      <div className="all-card-collection">
        <div className="card-contain-e-land">
          <main className="wrap-up main-body-e-land">
            <h3 className="bolder change-pos-e-land card-title-e-land">
              {categoryName}
            </h3>
            <picture className="background-img-e-com">
              <img src={img} alt="category-image" className="basic-image-e-land" />
            </picture>
          </main>
        </div>
      </div>
    </a>
  );
};

export { CategoryList };
