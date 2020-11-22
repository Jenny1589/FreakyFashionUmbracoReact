import React from 'react';

const Table = (props) => {
    const { items } = props;

    const renderHeaders = () => Object.keys(items[0]).map(k => <th scope="col">{k}</th>);
    const renderData = (item) => Object.values(item).map(d => <td>{d}</td>);
    const renderItems = () => items.map(i => <tr>{renderData(i)}</tr>);

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