import React, {useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchForm from '../../components/searchForm/searchForm';
import Table from '../../components/table/table';
import { services } from '../../../package.json';

const AdminProductList = () => {
    
    function Product(artNr, name, categories, price) {
        this.articleNumber = artNr;
        this.productName = name;
        this.categories = categories;
        this.price = price;
    }
    
    const {url} = useRouteMatch();
    const emptyProduct = new Product('', '', '', '');
    const [productList, setProductList] = useState([emptyProduct]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();

        const searchInput = event.target[0];
        const query = searchInput.value;
        const apiUrl = services.ApiUrl + services.contentRoute + 'getproducts?query=' + query;

        async function getSearchResult(){
           setIsLoading(true);
           const json = await fetch(apiUrl).then(response => response.json());

            if(json.length === 0){
                setProductList([emptyProduct]);
                setMessage('No product was found');
            }else {
                setProductList(json.map(p => new Product(p.articleNumber, p.name, p.categories, p.price)));
                setMessage('');
            }

           setIsLoading(false);        
        }
        
        getSearchResult();
    }

    function renderMessage(){
        return ( message === '' ? null : 
            <small className="text-danger mt-2">{message}</small>             
        );
    }

    return ( 
        <React.Fragment>
            <h1>Products</h1>
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-column">
                    <SearchForm onSearch={handleSearch} />
                    {renderMessage()}
                </div>                
                <Link to={`${url}/new`} className="btn btn-primary ml-auto">
                    New product
                </Link>
            </div>
            
            <Table items={isLoading ? [emptyProduct] : productList} />
        </React.Fragment>  
     );
}
 
export default AdminProductList;