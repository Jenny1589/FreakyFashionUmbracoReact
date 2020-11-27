import React from 'react';
import './table.css';
import {useRouteMatch} from 'react-router-dom';
import Icon from '../icon/icon';

const Table = (props) => {
    const { items } = props;
    const {url} = useRouteMatch();

    const renderHeaders = () => Object.keys(items[0]).map((key, i) => {
        const text = key === 'id' ? '' : key;

        return <th key={i} scope="col">{text}</th>
    });

    const renderData = (item) => Object.values(item).map((data, i) => {
        const content = Object.keys(item)[i] === 'id' && data !== '' ? (
            <Icon iconName="keyboard_arrow_right" />
        ) : data;

        return (
            <td key={i} className="align-middle">
                {content}
            </td>
        );
    });

    const handleClick = (id) => {
        window.location = `${url}/${id}`;
    }

    const renderItems = () => items.map((item, i) => {
        const itemIsEmpty = Object.values(item).join('') === '';

        return (itemIsEmpty ? 
            <tr>
                <td colSpan={Object.keys(item).length}>
                    Search to find products!
                </td>
            </tr> :
            <tr className="table-item" key={i} onClick={() => handleClick(item.id)}>
                {renderData(item)}
            </tr>
        );
    });

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