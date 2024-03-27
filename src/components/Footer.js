import React from 'react'
import styled from 'styled-components'


const Wrapper= styled.footer`
 footer{
 
    padding-top: 10%;
    padding-bottom: 8%;
    background: #000000;
    text-align: center;
 }
 footer p{
    color: #F2F2F2;
 }
 .footer-text-combo{
    display: flex;
    gap: 20px;
    flex-direction: column;
   
 }
span{
 color: #F2F2F2;
}

 @media (min-width:768px) {
   footer{
    padding-top: 4%;
    padding-bottom: 4%;
    text-align: left;
    }
    .footer-text-combo{
        display: flex;
        flex-direction: row;
        gap: 0px;
     } 
     .footer-p-1{
       

        padding: 0 0px;
    margin-right: 248px;
    margin-left: 31px;
     }
     span{
      margin-right: 23px;
      line-height:1.3
     }
     @media (min-width: 992px){
      .footer-p-1{
   padding: 0 0px;
    margin-right: 463px;
    margin-left: 31px;
    }
    span{
     margin-right: 23px;
     line-height:1.3
    }
     }

     @media (min-width:1200px){

      footer{
    padding-top: 3%;
    padding-bottom: 3%;
   
   
    }
      .footer-p-1{
    padding: 0 0px;
    margin-right: 271px;
    margin-left: 97px;
    } 

    span{
     margin-right: 0px;
     line-height:1.3
    }
     }
 }

`
function Footer() {
  return (
    <Wrapper>
        <footer>
        <div class="footer-text-combo">
            <p class="footer-p-1">©2022 Sand & Sea Construction • Built by Uncommon.org, a non-profit website development company</p>
            <div class="div">
            <span class="footer-p2">All Rights Reserved.</span>
            </div>
        </div>
    </footer>
    </Wrapper>
  )
}

export default Footer
