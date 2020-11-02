import React from 'react'; 
import { services } from '../../../package.json';
import getContent from '../../hooks/getContent';
import PageHeader from '../../components/pageHeader/pageHeader';
import ImageDisplay from '../../components/imageDisplay/imageDisplay';
import RecommendedProducts from '../../components/recommendedProducts/recommendedProducts';

const ProductView = (props) => {
    const url = services.ApiUrl + services.contentRoute + 'getproduct?route=' + props.location.pathname;
    const [product, isLoading] = getContent(url);

    return (isLoading ? <div>Loading...</div> :
        <div>
            <PageHeader text={ product.name } />
            <div className="container p-4">
                <div className="row">
                    <div className="col-6">
                        <ImageDisplay imageUrls={ product.imageUrls } />
                    </div>
                    <div className="col-6">
                        <div className="bg-white p-4 h-100">
                            <div className="mb-2">
                                <span  className="mr-2">Art. nr:</span>
                                <span>{ product.articleNumber }</span>
                            </div> 
                            <h4>Details</h4>
                            <p>{ product.description }</p>                           
                            <div>
                                <span className="display-4">{ product.price + ' kr'}</span>
                            </div>
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
                        </div>                        
                    </div>
                </div>
            </div>
            <RecommendedProducts excludeartnr={ product.articleNumber } />
        </div>        
    );
}
 
export default ProductView;