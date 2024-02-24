import React from 'react';

function TableRow({ data }) {
  return (
    <tr>
      <td >
        <div className='symbol-td'>
            <img className='symb-img' src={data.image} alt={data.name} /> 
            <p>{data.name}</p>
        </div>   
      </td>
      <td>{data.symbol.toUpperCase()}</td>
      <td className='left'>${data.current_price}</td>
      <td className='left'>${data.fully_diluted_valuation}</td>
      <td className='left'></td>
      <td className='left'>Mkt Cap :${data.market_cap}</td>
    </tr>
  );
}

export default TableRow;