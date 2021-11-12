import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;   
`
const Input = styled.input`
    width: 10rem;
    height: 3rem;
    text-align: center;
    border-radius: 6px;
    color: #181D31;
    background-color: #F0E9D2; 
`
const CategoriasAdd = ({setCategorias}) => {
   
    const [search,setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategorias([search])
        setSearch('')   
        
    }
   
    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Busca una categoria" name="search" value={search} onChange={handleInputChange} ref={searchRef} />
            </Form>
        </>
    )
}

export default CategoriasAdd
