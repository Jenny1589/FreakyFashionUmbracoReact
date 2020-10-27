import React, { Component } from 'react';   

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <header className="container-fluid">
                    <section>
                        <a href="#heroSection" className="fab">
                            <span className="material-icons">
                                expand_more
                            </span>
                        </a>
                        <div className="overlay-primary d-flex flex-column justify-content-center align-items-center w-50">

                            <div className="logo mt-5">Freaky Fashion</div>
                            <div className="row d-flex justify-content-center w-100 px-5 mt-3">
                                <div style={{ width: 40 }}>
                                    <hr />
                                </div>
                                <div className="px-3">
                                    <p className="lead">RELEASE YOUR STYLE</p>
                                </div>
                                <div style={{ width: 40 }}>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <img className="img-fluid" style={{ minHeight: 100 + "vh" }} src="~/Media/3zyf2etc/pexels-anastasiya-gepp-1462637.jpg" alt="Page header with woman holding out her hand displaying the company logo" />
                    </section>
                </header>

                <section id="heroSection" className="container-fluid bg-dark hero-section">
                    <div className="section-header-container">
                        <div className="section-header-background text-black-50">
                            Trending
                            <h2 className="section-header text-white mt-4">
                                TRENDING
                            </h2>
                        </div>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
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
                    <a href="#" className="sale-banner">
                        <img className="img-fluid" src="..." />
                        <div className="sale-banner-text mx-5">
                            WINTER SALE
                        </div>
                    </a>
                </section>

                <section className="product-section">
                    <div className="section-header-container">
                        <div className="section-header-background text-white">
                            Products
                            <h2 className="section-header text-black mt-4">
                                OUR PRODUCTS
                            </h2>
                        </div>
                    </div>
                </section>

                <footer>
                    {/* <!--@*Put footer partial here*@--> */}
                </footer>
            </div>
        );
    }
}
 
export default Home;