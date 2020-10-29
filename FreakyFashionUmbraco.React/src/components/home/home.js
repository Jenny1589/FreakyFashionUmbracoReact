import React from 'react';
import { services } from '../../../package.json';
import 'bootstrap/dist/js/bootstrap';
import getContent from '../../hooks/getContent'

const Home = () => {
    const url = services.ApiUrl + services.contentRoute + 'gethomepage';
    const [content, isLoading] = getContent(url);

    return ( isLoading ? <div>Loading...</div> :
        <div>
            <header className="container-fluid">
                <section>
                    <a href="#heroSection" className="fab">
                        <span className="material-icons">
                            expand_more
                        </span>
                    </a>
                    <div className="overlay-primary d-flex flex-column justify-content-center align-items-center w-50">

                        <div className="logo mt-5">{ content.companyName }</div>
                        <div className="row d-flex justify-content-center w-100 px-5 mt-3">
                            <div style={{ width: 40 }}>
                                <hr />
                            </div>
                            <div className="px-3">
                                <p className="lead">{ content.companySlogan.toUpperCase() }</p>
                            </div>
                            <div style={{ width: 40 }}>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <img className="img-fluid" style={{ minHeight: 100 + "vh" }} src={ services.ApiUrl + content.heroImageUrl } alt="Page header with woman holding out her hand displaying the company logo" />
                </section>
            </header>

            <section id="heroSection" className="container-fluid bg-dark hero-section">
                <div className="section-header-container">
                    <div className="section-header-background text-black-50">
                        { content.trendingHeader }
                        <h2 className="section-header text-white mt-4">
                            { content.trendingHeader.toUpperCase() }
                        </h2>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/1020x570.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1020x570.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1020x570.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="sale-section">
            <div className="section-header-container">
                    <div className="section-header-background text-white">
                        Campaign
                        <h2 className="section-header text-black mt-4">
                            CURRENT CAMPAIGN
                        </h2>
                    </div>
                </div>
                <a href="/categories/sale" className="sale-banner">
                    <img className="img-fluid" src={ services.ApiUrl + content.campaignImageUrl } alt="" />
                    <div className="sale-banner-text mx-5">
                        { content.campaignName.toUpperCase() }
                    </div>
                </a>
            </section>
            <footer>
                {/* <!--@*Put footer partial here*@--> */}
            </footer>
        </div>
    );
}
 
export default Home;