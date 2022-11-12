import React, { useRef, useState } from 'react'
import {Link} from "react-router-dom";

import './styleSearch.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faDeleteLeft, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"



export default function Search() {
    const[searchValue, setSearchValue] = useState('')
    const inputRef = useRef()
    return (
        <div className="content__search">
            <input 
                ref={inputRef}
                value={searchValue}
                type="text" 
                placeholder="Search destinations, hotels" 
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
            {
                !!searchValue && (
                    <div 
                        className="content__btbDelete"
                        onClick={() => {
                            setSearchValue('')
                            inputRef.current.focus()
                        }}
                    >
                        <FontAwesomeIcon icon={faDeleteLeft} />
                    </div>
                )
            }
            <div className="content__btnSearch" >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            
            <div className="content__button">
                <Link href="">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>check in</span>
                </Link>
                <Link href="">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>check out</span>
                </Link>
                <Link href="">
                    <FontAwesomeIcon icon={faUser} />
                    <span>1 room, 2 adults</span>
                </Link>
            </div>
        </div>
    )
}
