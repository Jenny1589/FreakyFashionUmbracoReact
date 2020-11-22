import React from 'react';
import './table.css';

const Table = (props) => {
    const { items } = props;

    const renderHeaders = () => Object.keys(items[0]).map((key, i) => <th key={i} scope="col">{key}</th>);
    const renderData = (item) => Object.values(item).map((data, i) => <td key={i}>{data}</td>);
    const renderItems = () => items.map((item, i) => <tr key={i}>{renderData(item)}</tr>);

    return (  
        <table className="table table-striped w-100 mt-5">
            <thead>
                <tr>
                    {renderHeaders()}
                </tr>
            </thead>
            <tbody>
                {renderItems()}
            </tbody>
        </table>
    );
}
 
export default Table;