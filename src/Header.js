import React from 'react'
import styled from 'styled-components'
import logo from './Amazon.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Header() {
  return (
    <div>
      <Container>
        <HeaderLogo>
          <img src={logo}></img>
          
        </HeaderLogo>
            <HeaderOptionAdress>

              <LocationOnIcon/>
              <HeaderOption>
               <OptionLineOne>Hello</OptionLineOne>
               <OptionLineTow>Select Your Adress</OptionLineTow>
               </HeaderOption>
            </HeaderOptionAdress>
        <HeaderSearch>
          <HeaderSearchInput type='text' />
          <HeaderSearchIconContainer>
            <SearchIcon />
        </HeaderSearchIconContainer>
        </HeaderSearch>
        <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello Walid</OptionLineOne>
          <OptionLineTow>Accounts & lists</OptionLineTow>

        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTow>& Orders</OptionLineTow>

        </HeaderOption>
           <HeaderOptionCart>
            <ShoppingBasketIcon/>
            <CartCount>1</CartCount>
           </HeaderOptionCart>
        </HeaderNavItems>
        
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
justify-content : space-between;
color : white;
`
const HeaderLogo = styled.div `
img{
  width:100px;
  margin-left : 11px;
}
`
const HeaderOptionAdress = styled.div`
  padding-left : 9px;
  display : flex;
  align-items : center;

`
const OptionLineOne =styled.div``
const OptionLineTow =styled.div`
  font-weight:700;
`
const HeaderSearch= styled.div`
display : flex;
flex-grow : 1;
height : 40px;
border-radius : 4px;
overflow:hidden;
margin-left: 5px;
background-color : white;
:focus-within{
  box-shadow : 0 0 0 3px #f90;

}
`
const HeaderSearchInput =styled.input`
flex-grow : 1;
border=0;
:focus {
  outline: none;
  }
`
const HeaderSearchIconContainer =styled.div`
background-color : #febd69 ;
width : 45px ;
color : black;
display : flex;
justify-content :center;
align-items : center;
`
const HeaderNavItems =styled.div`
display : flex;
`
const HeaderOption=styled.div`
    padding:10px 9px 10px 9px;
`
const HeaderOptionCart=styled.div`
display : flex;
align-items : center;
padding-right: 9px;
`
const CartCount=styled.div`
padding-left: 4px;
`