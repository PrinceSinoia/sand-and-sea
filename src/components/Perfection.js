import React from 'react'
import styled from'styled-components'



const Wrapper= styled.section`
.perfection{
background: #FFFFFF;
}
.perfection-combo{
    display: flex;
    flex-direction: column-reverse;
}
.perfection h2{
    line-height: 1.3;
padding-top: 12%;
text-align: right;
padding-bottom: 5%;

margin-right: 20px;
}
span{
    color: #3D8FB6;
}
.perfection-lorem{
    padding: 0 20px;
    text-align: right;
}


.perfection-phone {
    color:#0F0F0F;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
  }
  
.perfection-phone::before {
    content: "";
    width:0px;
    background: #545454;
    height:2px;
    position:absolute;
    left:-110px;
    top:16px;
    transition: transform 0.2s ease-in-out;
}
  
.perfection-phone:hover::before {
    position:absolute;
    left:0px;
    top:20px;
    transform: scaleX(1);

  } 


.phone-div{
    gap: 5px;
    position: relative;
    left: 66px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 70px; 
    background: #F2F2F2;
    text-align: center;
    align-items: center;
    justify-content: center;
}


.perfection-email {
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
    color:#0F0F0F;
    margin-right: 190px;
  }
  
.perfection-email::before {
    content: "";
    width:0px;
    background: #545454;
    height:2px;
    position:absolute;
    left:-70px;
    top:20px;
    transition: transform 0.2s ease-in-out;
}
  
.perfection-email:hover::before {
    position:absolute;
    left:0px;
    top:20px;
    transform: scaleX(1);

  } 


.email-div{
    gap: 10px;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
   width: 290px;
   height: 70px;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 20px;
}
.details{
    padding-top: 10%;
    padding-bottom: 10%;
    display: flex;
    float:right;
    flex-direction: column;
    gap: 18px;
}
/* .hr-1{
    border: none;
    background: #545454;
    width: 80px;
    height: 2px;
    position: relative;
    right: 100px;
    bottom: 1px;
} */
/* .hr-2{
    border: none;
    background: #545454;
    width: 70px;
    height: 2px;
    position: relative;
    right: 160px;
    bottom: 5px;
} */
.email{
    color: #444444;
}
.phone{
    color: #444444;  
}
.cell{
color: #939393;
}
.perfection-combo img{
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 5%;
}


@media (min-width:768px) {
    .perfection{
        padding-top: 10%;
padding-bottom: -20%;
    }
    .perfection-combo{
        display: flex;
        flex-direction: row;
    } 
    .perfection-combo img{
        width: 40%;
        margin-left: 25px;
        padding-top: 3%;
    }
    .perfection h2{
    padding-top: 45%;
    padding: 0px 0px;
    margin-left: 108px;
    line-height: 1.3;
    padding-top: 12%;
    text-align: right;
    padding-bottom: 4%;
    margin-right: 26px;
 }
 .details{
    padding-top: 10%;
    padding-bottom: 5.5%;
    display: flex;
    float:right;
    flex-direction: column;
    gap: 18px;
}

.perfection-lorem{
   
    padding: 0 -39px;
    margin-left: 84px;
    text-align: right;
}
 }



 @media (min-width:992px) {
    .perfection{
       padding-top: 2.5%;
            }
    .perfection-combo img{
        width: 50%;
        margin-left: 35px;
        padding-top: 3%;
    } 
    .perfection-text-combo{
        padding-top: 6%;
        margin-right: 20px;
    }

    .perfection-lorem{
        line-height: 1.2;
        margin-left: 153px;
        padding: 0 -79px;
        text-align: right;
    }
    .perfection h2{
        padding-top: 45%;
        padding: 0 30px;
        line-height: 1.5;
        padding-top: 12%;
        text-align: right;
        padding-bottom: 4%;
        margin-right: -8px;
       
     }
     .details{
        padding-top: 10%;
        padding-bottom: 5%;
        display: flex;
        float:right;
        flex-direction: column;
        gap: 30px;
    }
   
}



@media (min-width:1200px) {
        .perfection{
            padding-top: 12%;
                 }  
                 .perfection-combo img{
                    width: 100%;
                    margin-left: 99px;
                    padding-top: 3%;
                } 
                .perfection-text-combo{
                    padding-top: 0%;
                position: relative;
                right: 142px;
                bottom: 9px;
                }

                .perfection-lorem{
                    line-height: 1.6;
                    /* margin-left: 370px; */
                    margin-left: 300px;
                     margin-right: 0px; 
                    padding: 0 -79px;
                    text-align: right;
                }
                .perfection h2{
                   font-size: 40px;
                    padding: 0 0px;
                    line-height: 1.5;
                    padding-top: 12%;
                    text-align: right;
                    padding-bottom: 2%;
                    margin-left: 612px;
                    margin-right: 22px;
                   
                 }
                 .details{
                    padding-top: 2%;
                    padding-bottom: 5%;
                    display: flex;
                    float:right;
                    flex-direction: column;
                    gap: 30px;
                }
             
                .phone-div{
                    gap: 10px;
    position: relative;
    /* left: 100px; */
    left: 133px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 80px; 
    background: #F2F2F2;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.email-div{
    gap: 10px;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
   width: 355px;
   height: 85px;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 20px;
}

.perfection-phone {
    font-size:12px;
    color:#0F0F0F;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
    margin-right:67px;
  }

  .perfection-email {
    gap: 10px;
    font-size:12px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
    color:#0F0F0F;
    margin-right: 220px;
  }



  .perfection-email::before {
    content: "";
    width:70px;
    background: #545454;
    height:1px;
    position:absolute;
    left:-75px;
    top:16px;
    transition: .5s ease-in-out;
    /* transition: transform 0.2s ease-in-out; */
}
  
.perfection-email:hover::before {
    position:absolute;
    left:0px;
    top:15px;
    transform: scaleX(1);

  } 


  .perfection-phone::before {
    content: "";
    width:58px;
    background: #545454;
    height:1px;
    position:absolute;
    left:-70px;
    top:16px;
    /* transition: transform 0.2s ease-in-out; */
    transition: .5s ease-in-out;
}
  
.perfection-phone:hover::before {
    position:absolute;
    left:0px;
    top:15px;
    transform: scaleX(1);

  } 

    }


`


function Perfection() {
  return (
    <Wrapper>
       <div class="perfection">
        <div class="perfection-combo">
            <img src="./photos/Img 3.png" alt="photo"/>
            <div class="perfection-text-combo">
                <h2>PERFECTION IS ALWAYS UNDER<span> CONSTRUCTION</span></h2>
                <p class="perfection-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="details">
                    <div class="phone-div">
                     <a class='perfection-phone' href="#">PHONE</a>
                    
                        <p class="cell">631-834-2627</p>
                    </div>
                    <div class="email-div">
                      <a  class='perfection-email'href="#">Email</a>
                        <p class="cell">joe@sandandseaconstruction.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </Wrapper>
  )
}

export default Perfection
