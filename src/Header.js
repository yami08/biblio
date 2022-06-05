import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <div>
      <Container>
        <HeaderLogo>
<img src={"./Amazon-Logo-1024x426.png"}></img>
        </HeaderLogo>
        <HeaderOptionAdress>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTow>Select Your Adress</OptionLineTow>

        </HeaderOptionAdress>
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
`
const HeaderLogo = styled.div `
img{
  width:100px;s
}
`
const HeaderOptionAdress = styled.div``
const OptionLineOne =styled.div``
const OptionLineTow =styled.div``