const FeatureTheme = ({categories : {imgTheme, ThemeName}}) => {
    return ( 
        <div className="all-card-collection">
        <div className="card-contain-e-land">
            <main className="main-body-e-land wrap-up">
                <picture className="background-img-e-com no-opacity">
                    <img src={imgTheme} alt="image" className="basic-image-e-land"/>
                </picture>
            </main>
        </div>

        <a href="">
            <h3 className="hover-underline"> {ThemeName} </h3>
        </a>
    </div>
     );
}
 
export {FeatureTheme};