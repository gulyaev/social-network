import React, { useState } from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import Pagination from 'react-bootstrap/Pagination'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let active = 2;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <Pagination size="sm" className={styles.paginator}>
        {portionNumber > 1 &&
            <Pagination.First onClick={() => { setPortionNumber(portionNumber - 1) }}/> }


        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <Pagination.Item 
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</Pagination.Item>
            })}

        {portionCount > portionNumber &&
            <Pagination.Last onClick={() => { setPortionNumber(portionNumber + 1) }} />}
    </Pagination>
}

export default Paginator;