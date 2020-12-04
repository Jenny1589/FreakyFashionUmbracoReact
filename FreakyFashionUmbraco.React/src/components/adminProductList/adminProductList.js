import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import SearchForm from '../../components/searchForm/searchForm';
import Table from '../../components/table/table';
import { services } from '../../../package.json';

const AdminProductList = () => {
    
    function Product(id, artNr, name, categories, price) {
        this.id = id === undefined ? '' : id;
        this.artNr = artNr === undefined ? '' : artNr;
        this.name = name === undefined ? '' : name;
        this.categories = categories === undefined || categories.length === 0 ? '' : categories.join(', ');
        this.price = price === undefined ? '' : price;
    }
    
    const {url} = useRouteMatch();
    const {search} = useLocation();
    const emptyProduct = new Product();
    const [productList, setProductList] = useState([emptyProduct]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(search !== ''){
            let deleteMessage = search.split('=')[1];
            if(deleteMessage === 'ok') setMessage('Product was successfully deleted!');
        }               
    }, [search]);

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
                setProductList(json.map(p => new Product(p.id, p.articleNumber, p.name, p.categories, p.price)));
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