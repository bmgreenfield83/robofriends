import React from 'react'

const SearchBox = ({ text, searchChange }) => {

    return (
        <div className='pa2'>
            <input 
                value={text}
                className='pa3 ba b--green bg-lightest-blue' 
                type="search" 
                placeholder="search robots" 
                onChange={e => searchChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBox
