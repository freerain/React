import React from 'react'

function Search()
{
    return(
        <div className="search">
            <input type="search" placeholder="Search"/>
            <button>Поиск</button>
            <div className="itemsMinOnfo" onChange>
                123
            </div>
        </div>
    );
}

export default Search;