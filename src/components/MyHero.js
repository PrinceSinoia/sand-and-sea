import React from 'react'
import styled from 'styled-components'




const Wrapper= styled.section`

.hero{
  background: url(../photos/nam.png);
  background-size: cover;
  background-position: center, center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 380px; */
  justify-content: flex-end;

}

/* .hero-text-1{
  padding-top: 12%;
  display: flex;
  gap: 10px;
  flex-direction: column;
} */
/* .hero .hero-text-1 img{
  width: 18%;
  margin-left: 7%;
} */

.hero-div-2{
  display: flex;
  gap: 25px;
  margin-bottom:40px;
  margin-left: 3%;
flex-direction: row;
}
.hero .hero-div-2 img{
  width: 40%;  
}
/* .hero .fst-p{
  padding: 0 20px;
  margin-right: 50px;
} */


@media (min-width:768px) {
    .hero{
        height: 50vh;
        gap: 40px;
    }
    .hero-text-1{
        padding-top: 8%;
        display: flex;
        flex-direction: row;
    }
    /* .hero .fst-p{
    line-height: 1.4;
        padding: 0 60px;
        margin-right: 350px;
      
    } */
    /* .hero .hero-text-1 img{
        width: 10%;
        position: relative;
        right: 40px;
        margin-left: -10%;
    }   */
    .hero-div-2{
        display: flex;
        /* gap: 200px; */
        gap: 261px;
        margin-left: 5%;
     flex-direction: row;
     /* padding-top: 241px; */
    }
    .hero .hero-div-2 img{
        width: 30%; 
    }
    .hero-div-2 .div{
     position: relative;
     line-height: 1.4;
     top: 20px;
    }
}

@media (min-width:992px) {
    .hero{
        height: 50vh;
        gap:0px;
    } 
    .hero-text-1{
        padding-top: 7%;
        display: flex;
        flex-direction: row;
    }
    .hero .fst-p{
    line-height: 1.4;
        padding: 0 50px;
        margin-right: 570px;
      
    }
    .hero .hero-text-1 img{
        width: 8%;
        position: relative;
        right: 40px;
        margin-left: -10%;
    } 
    
    /* hero part 2  */
    .hero-div-2{
        display: flex;
        /* gap: 446px; */
        gap: 491px;
        margin-left: -4%;
     flex-direction: row;
     padding-top: 367px;
    }
    .hero .hero-div-2 img{
        width: 20%;  
        margin-left: 85px;
    }
    .hero-div-2 .div{
     position: relative;
     line-height: 1.4;
     top: 35px;
    } 
}

@media (min-width:1200px) {
    .hero{
        height: 100vh;
        gap:75px;
    }

    /* .hero-text-1{
        margin-left: 80px;
    margin-right: 80px;
    padding-top: 10%;
    display: flex;
    gap: 60%;
    flex-direction: row;
    } */
    /* .hero .fst-p{
    line-height: 2.4;
    padding: 0 130px;
    margin-right: 76px;
    } */
    /* .hero .hero-text-1 img{
        width: 8%;
        height: 90%;
    }  */
     /* hero part 2  */

    .hero-div-2{
        display: flex;
        gap: 646px;
    margin-left: -8%;
    margin-bottom: -101px;
        padding-top: 28px;
     flex-direction: row;
    }
    .hero .hero-div-2 img{
        width: 20%;  
        margin-left: 200px;
    }
    .hero-div-2 .div{
     position: relative;
     line-height: 1.4;
     top: 35px;
    } 
   } 

`

function MyHero() {
  return (
    <Wrapper>
       <div class="hero">

<div class="hero-text-1">
    {/* <p class="fst-p">PERFECTION IS ALWAYS UNDER CONSTRUCTION</p> */}
    {/* <img src="./photos/Menu.png" alt="hero icon img"/> */}
</div>

<div class="hero-div-2">

    <img src="./photos/Logo.png" alt="logo"/>


    <div class="div">
        <p>P.O. Box 2082</p>
        <p>East Hampton, NY, 11937, US</p>
    </div>
</div>
</div>
    </Wrapper>
  )
}

export default MyHero


