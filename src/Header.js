import React from 'react'
import styled from 'styled-components'
import logo from './Amazon.png'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div>
      <Container>
        <HeaderLogo>
          <img src={logo}></img>
          
        </HeaderLogo>
        <HeaderOptionAdress>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTow>Select Your Adress</OptionLineTow>

        </HeaderOptionAdress>
        <HeaderSearch>
          <HeaderSearchInput type='text' />
          <HeaderSearchIconContainer>
            <SearchIcon />
        </HeaderSearchIconContainer>
        </HeaderSearch>
        
        </Container>
        </div>
  )
}

export default Header
const Container = styled.div`
height :60px;
background-color : #0f1111 ;
display : flex;
align-items : center;
color : white;
`
const HeaderLogo = styled.div `
img{
  width:100px;
  margin-left : 11px;
}
`
const HeaderOptionAdress = styled.div`

`
const OptionLineOne =styled.div``
const OptionLineTow =styled.div``
const HeaderSearch= styled.div``
const HeaderSearchInput =styled.input``
const HeaderSearchIconContainer =styled.div``