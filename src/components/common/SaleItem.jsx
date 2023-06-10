import React from 'react';
import styled from 'styled-components';

export default function SaleItem({saleItem}) {  
  return (
    <>
    {
      saleItem.map((item, index)=>(
        <SaleItemStyle key={item.itemId}>
          <img src={item.itemImg} alt={item.itemName} />
          <span className="itemName">{item.itemName}</span>
          <span className="itemPrice">{item.itemPrice}원</span>
        </SaleItemStyle>
      ))
    }
    </>
  );
}

const SaleItemStyle = styled.button`
  width: 140px;
  height: 162px;
  text-align: start;
  img {
    width: 140px;
    height: 115px;
    border-radius: 8px;
  }
  span {
    display: block;
    /* 한줄 넘어가면 말줄임 되게 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .itemName {
    font-size: var(--font--size-l);
  }
  .itemPrice {
    color: var(--basic-color-4);
    font-size: var(--font--size-md);
    font-weight: var(--font--Bold);
  }
`;