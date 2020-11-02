import React from 'react';
import ProductCard from '../productCard/productCard';
import './carousel.css';

const Carousel = (props) => {

    function renderCarouselItems(){
        const products = [...props.products];
        
        function renderProducts(data){
            return data.map((p, i) => 
                <div className='m-3' style={{width: 30 + '%'}}>
                    <ProductCard key={ i } product={ p } />
                </div>
            );
        }

        function renderCarouselItem(itemGroup, key){
            function getCarouselItemClasses(){
                let classes = 'carousel-item'
                classes += key === 0 ? ' active' : '';

                return classes;
            }

            return (
                <div key={ key } className={ getCarouselItemClasses() }>
                    <div className="d-flex justify-content-start">
                        { renderProducts(itemGroup) }
                    </div>                    
                </div>
            );
        }

        const carouselItems = [];

        while(products.length > 0){
            const items = products.length < 3 ? products.splice(0, products.length) : products.splice(0, 3);            
            carouselItems.push(items);
        }

        return carouselItems.map((g, i) => renderCarouselItem(g, i))
    }

    function renderCarouselIndicators(){
        const indicators = [];
        const numberOfIndicators = Math.ceil(props.products.length / 3);

        for(let i = 0; i < numberOfIndicators; i++){
            indicators.push(
                <li data-target="#carousel" data-slide-to={ i } className={ i === 0 ? 'active' : '' }></li>
            );
        }

        return (
            <ol className="carousel-indicators">
                { indicators }
            </ol>
        );
    }

    return (  
        <div id="carousel" className="carousel slide w-75" data-ride="carousel">
            { renderCarouselIndicators() }
            <div className="carousel-inner">
                { renderCarouselItems() }
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
 
export default Carousel;