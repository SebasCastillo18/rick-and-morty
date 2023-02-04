import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({setPage, location, RESIDENT_PERPAGE}) => {
    return (
        <ul className="pagination_list">
            {
                numbersPage(location, RESIDENT_PERPAGE).map(numberPage => <li className="pagination_item" onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
            }
        </ul>
    )
}

export default Pagination
