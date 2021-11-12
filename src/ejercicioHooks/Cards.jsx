import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Ol = styled.ol`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    
`
const H3Nombre = styled.h2`
    font-size:20px;
    text-align: center;
    text-transform: uppercase;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#678983;
    color: #F0E9D2;
    border-radius:50px 50px 0 0;
`
const Image = styled.img`
    width: 20rem;
    height:10rem;
`

const Li = styled.li`
    margin: 20px;
    width: 20rem;
    height: 18rem;
`



const Cards= ({categoria}) => {
    const [images,setImages] = useState([])

    useEffect(() => {
        imgGif(categoria).then(imgData => setImages(imgData))
    }, [categoria])


    const imgGif = async(categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=18&api_key=a0kXvkeOuOZpggug5u8e4f9bdTWEiS60`
        
        const resp = await fetch(url);
        const {data} = await resp.json();

        const imgData = data.map((img) => {
            return {
                id: img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        })
        return imgData;
    }

    return (
        <div>
            
            <Ol >
                {
                    images.map((img)=>(
                        <Li key={img.id}>
                            <H3Nombre >{img.title}</H3Nombre>
                            <Image  src={img.url} alt= "imagen" />
                        </Li>
                    ))
                }

            </Ol>
        </div>
    )
}

export default Cards
