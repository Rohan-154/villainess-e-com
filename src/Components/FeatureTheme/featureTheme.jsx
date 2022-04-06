const FeatureTheme = ({ categories: { imgTheme, ThemeName } }) => {
  return (
    <div className="all-card-collection" style={{margin:'2rem 3rem 0rem'}}>
      <div className="card-contain-e-land">
        <main className="main-body-e-land wrap-up">
          <picture className="background-img-e-com no-opacity">
            <img src={imgTheme} alt="image" className="basic-image-e-land" />
          </picture>
        </main>
      </div>
      <h3 className="hover-underline" style={{marginBottom: '2rem'}}> {ThemeName} </h3>
    </div>
  );
};

export { FeatureTheme };
