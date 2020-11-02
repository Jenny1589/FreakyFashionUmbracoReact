import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../package.json';
import 'bootstrap/dist/js/bootstrap';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import Banner from '../../components/banner/banner';
import Grid from '../../components/linkGrid/linkGrid';
import PopularProducts from '../../components/popularProducts/popularProducts';
import Carousel from '../../components/carousel/carousel';

const HomeView = () => {
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
                <PageHeader text={ content.trendingHeader } bgText={ content.trendingHeaderBgText } darkMode={ true }/>
                <Carousel products={ content.trendingProducts } />                
            </section>
            <section className="link-section">
                <PageHeader text={ content.linksHeader } bgText={ content.linksHeaderBgText } />
                <Grid linkCardItems={ content.categoryLinks } />
            </section>
            <section className="product-section">
                <PopularProducts />
            </section>
            <section className="sale-section">
                <PageHeader text={ content.campaignHeader } bgText={ content.campaignHeaderBgText } />
                <Link to="/categories/sale">
                    <Banner imgUrl={ services.ApiUrl + content.campaignImageUrl }
                        text={ content.campaignName } />
                </Link>
            </section>
        </div>
    );
}
 
export default HomeView;