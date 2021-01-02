import image1 from '../Images/hikawa-sayo-website.png';
import image2 from '../Images/my-op-website.png';
import image3 from '../Images/pisp-sulsel.png';
import image4 from '../Images/sayo-hikawa-website.png';

function Templates() {
    return (
        <div>
            <div className="cover">
                <div className="position-absolute container-md top-50 translate-middle-y px-5">
                    <div className="text-md-start text-center text-white">
                        <h1>Templates</h1>
                        <p className="lead me-0 me-md-5">Down below, is all of the template i make using HTML, CSS, JS, jQuery and Bootstrap 5. You can also order a custom style or layout, by sending me the sketch of your custom website. And with your permission, i will post your custom style in this page and use it as a reference for my other client.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5 position-absolute top-100 start-50 translate-middle-x">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card m-2">
                            <img src={image1} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center text-md-start">Template 1</h5>
                                <p className="card-text text-center text-md-start">This template was used for my Discord Bot Website.</p>
                                <p className="text-center"><a rel="noreferrer" href="https://hikawa-sayo.netlify.app" target="_blank" className="btn btn-info text-white">Live Demo</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card m-2">
                            <img src={image2} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center text-md-start">Template 2</h5>
                                <p className="card-text text-center text-md-start">This template was used for my Unfinished portofolio. Live preview is not available for the moment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card m-2">
                            <img src={image3} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center text-md-start">Template 3</h5>
                                <p className="card-text text-center text-md-start">This template was used for PISP SulSel. Responsive version of this template is under development.</p>
                                <p className="text-center"><a rel="noreferrer" href="https://dmi-cotomks.netlify.app" target="_blank" className="btn btn-info text-white">Live Demo</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card m-2">
                            <img src={image4} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center text-md-start">Template 4</h5>
                                <p className="card-text text-center text-md-start">This template was my backup template for my Discord Bot website.</p>
                                <p className="text-center"><a rel="noreferrer" href="https://sayo-hikawa.netlify.app" target="_blank" className="btn btn-info text-white">Live Demo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Templates;