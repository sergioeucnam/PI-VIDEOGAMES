import React, { useState } from 'react'
import './Pagination.css'

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
    const [input, setInput] = useState();
    const nextPage = () => {
        setInput(input + 1)
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        setInput(input - 1)
        setCurrentPage(currentPage - 1)
    }

    return (
        <div className='pagination'>
            <button className='pagination-btn' hidden={currentPage <= 1} onClick={prevPage} >Prev</button>
            <label>{currentPage}</label>
            <label>-------</label>
            <label hidden={currentPage === 1}>{totalPages}</label>
            <button className='pagination-btn' hidden={currentPage === totalPages} onClick={nextPage}>Next</button>
        </div>
    )
}
