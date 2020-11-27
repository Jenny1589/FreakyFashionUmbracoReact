import React from 'react'; 
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import RecommendedProducts from '../../components/recommendedProducts/recommendedProducts';
import ProductDetails from '../../components/productDetails/productDetails';

const ProductView = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getproduct?route=' + props.location.pathname;
    const [product, isLoading] = getContent(url);

    return (isLoading ? <div>Loading...</div> :
        <div>
            <PageHeader text={ product.name } />
            <ProductDetails product={product}>
                <div className="d-flex justify-content-between align-items-center py-4">
                    <div className="form-group">
                        <label for="size-input">Size</label>
                        <select id="size-input" className="form-control">
                            <option>Choose...</option>
                            <option>XS - XSmall</option>
                            <option>S - Small</option>
                            <option>M - Medium</option>
                            <option>L - Large</option>
                            <option>XL - XLarge</option>
                            <option>XXL - XXLarge</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add to cart
                    </button>                                
                </div>
            </ProductDetails>
            <RecommendedProducts excludeartnr={ product.articleNumber } />
        </div>        
    );
}
 
export default ProductView;