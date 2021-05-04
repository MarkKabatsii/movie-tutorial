import React from 'react'

const SearchBox = props => {
    return (
        <div className="col col-sm-4">
            <input
                className="form-control"
                defaultValue={props.value}
                onChange={ event => props.setSearchValue(event.target.value)}
                placeholder="Type to search..."
                type="text"

            />
        </div>
    )
}

export default SearchBox