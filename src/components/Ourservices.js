import React from 'react'
import styled from 'styled-components'


const Wrapper=styled.section`
    .OurServices{
        background: #FFFFFF;
        padding-top: 9%;
        padding-bottom: 9%;
       
        text-align: left;
    }
    .h2-No1 {
      font-family:${props=>props.theme.fam.Thin};
padding-bottom: 8%;
margin-left: 18px;
    }
    .card-combos{
      
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .services-cards{
        margin: 0 auto;
        height: 200px;
        width: 350px;
        background: #FFFFFF;
        justify-content: center;
        display: flex;
        flex-direction: column;
        border: 2px solid #7F7F7F;
    }
    .services-cards img{
        width: 20%; 
         margin-left: 25px; 
     } 
    .services-cards p{ 
        margin-right: 25px; 
         margin-left: 25px; 
         color: #747474;
         padding-top: 3%;
        padding-bottom: 2%;
    }

        h4{
          padding: 25px 28px;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            position:relative;
         
        
          }
          
        h4::before {
            content: "";
            width:70px;
            background: #545454;
            height:2px;
            position:absolute;
            left:30px;
            top:55px;
            transition: transform 0.2s ease-in-out;
        }
          
        h4:hover::before {
            position:absolute;
            left:22px;
            top:50px;
            transform: scaleX(1);
        
          }  











.o1-1{
    width: 90%;
    display: flex;
    margin: 0 auto;
padding-top: 10%;
            }
  .o1{
    width: 90%;
    display: flex;
    margin: 0 auto;
  } 


  .gallery-img-div-1{
display: flex;
flex-direction: column;
gap: 10px;
  }

  .gallery-img-div-2{
    display: flex;
    flex-direction: column;
    gap: 10px; 
  }

  .gallery-img-div-3{
    display: flex;
    flex-direction: column;
    gap: 10px; 
  }


  .image-gallery{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }    
  .text-gallery-div{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 230px;
    width: 340px;
    align-items: center;
    justify-content: center;
  }  
  .text-gallery-div h2 p{
    text-align: center;
color: #3887B1;
  }
  .text-gallery-div h2{
    line-height: 30px;
  } 
 

  @media (min-width:768px) {

.OurServices{
    padding-top: 8%;
}
   .card-combos {
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
   }
   .h2-No1{
    padding-bottom: 8%;
    margin-left: 25px;
        }
        .services-cards img{
            width: 30%; 
             margin-left: 25px; 
         } 
         .services-cards{
            margin: 0 auto;
            height: 250px;
            width: 350px;
            justify-content: center;
            display: flex;
            flex-direction: column;
             
        }
        .o1{
            width: 100%;
            display: flex;
            margin: 0 ;
          } 
          .o1-1{
            width: 100%;
            display: flex;
            margin: 0 ;
        padding-top: 0%;
                    }

                     .image-gallery{
                        padding-top: 10%;
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        margin-left: 23px;
                        margin-right: 23px;
                      }  

                    .gallery-img-div-1{
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                          }
                        
                          .gallery-img-div-2{
                            display: flex;
                            flex-direction: column;
                            gap: 10px; 
                          }
                        
                          .gallery-img-div-3{
                            display: flex;
                            flex-direction: column;
                            gap: 10px; 
                          }

                          .text-gallery-div{
                            display: flex;
                            flex-direction: column;
                            margin: 0 auto;
                            height: 155px;
                            width: 245px;
                            align-items: center;
                            justify-content: center;
                          }    

 }

 @media (min-width:992px) {
     .text-gallery-div{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 246px;
        width: 323px;
        align-items: center;
        justify-content: center;
      }    
 }


 @media (min-width:1200px) {
    .OurServices{
        padding-top: 5%;
    }
  .h2-No1{
        font-size: 45px;
        padding-bottom: 8%;
        margin-left: 115px;
            }

            .services-cards img{
                width: 22%; 
                 margin-left: 25px; 
             } 
             .services-cards{
                margin: 0 ;
                height: 400px;
                width: 100%;
                justify-content: center;
                display: flex;
                flex-direction: column;    
            }
            .card-combos {
                flex-direction: row;
                margin-left: 99px;
              gap: 8px;
                margin-right: 99px;
               }

                .image-gallery{
                padding-top: 10%;
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin-left: 0px;
                margin-right: 0px;
                 justify-content: center;
                
              }   

               .text-gallery-div{
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                height: 290px;
                 height: 292px; 
                 background: #FFFFFF;
                width: 390px;
                align-items: center;
                justify-content: center;
              }   

               .text-gallery-div:hover{
                background:#42A1EC;
                transition: .8s ease-in-out
              } 


              
              .services-cards img{
                width: 25%; 
                padding-bottom:9%;
                 margin-left: 30px; 
             } 
            .services-cards p{ 
              position:relative;
              top: 20px;
              padding-top: 0%;
              line-height:30px;
    padding-bottom: 0%;
    margin-right: 87px;
    margin-left: 30px;
            }
         
                    h4{
                      padding-top: 2.5%;
                padding-bottom: 5%;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            position:relative;
         
        
          }
          
        h4::before {
            content: "";
            width:70px;
            background: #545454;
            height:2px;
            position:absolute;
            left:30px;
            top:50px;
            transition: 0.5s ease-in-out;
        }
          
        h4:hover::before {
            position:absolute;
            left:28px;
            top:30px;
            transform: scaleX(1);
        
          }  





          .text-gallery-div h2{
    line-height: 70px;
    font-size:45px;
  }              
 }

`

function Ourservices() {

  return (
    <Wrapper>
        <div class="OurServices">
        <h2 class="h2-No1">Our services</h2>
        <div class="card-combos">
            <div class="services-cards">


                <img src="./photos/Icon (1).png" alt="photo"/>

                <h4>Maintenance</h4>
                {/* <hr/> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. </p>
            </div>
            <div class="services-cards">
                <img src="./photos/Icon (1).png" alt="photo"/>
              <a><h4>Construction</h4></a>
                {/* <hr/> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. </p>
            </div>
            <div class="services-cards">
                <img src="./photos/Icon (1).png" alt="photo"/>
                <h4>Remodeling</h4>
                {/* <hr/> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. </p>
            </div>
        </div>

        <div class="image-gallery"> 
             <div class="gallery-img-div-1">
                <img class="o1-1" src="./photos/Img 1.png" alt="photo"/>
                <img class="o1" src="./photos/Img 4.png" alt="photo"/>
            </div> 


             <div class="gallery-img-div-2">
                <img class="o1" src="./photos/Img 2.png" alt="photo"/>
                <div class="text-gallery-div">
                    <h2>SELECTED <p>WORKS</p>
                    </h2>
                    <p>(HOVER ON IMAGE)</p>
                </div>
                <img class="o1" src="./photos/Img 5.png" alt="photo"/>
            </div> 


 <div class="gallery-img-div-3">
            <img class="o1" src="./photos/Img 3.png" alt="photo"/>
            <img class="o1" src="./photos/Img 6.png" alt="photo"/>

            </div>  


         </div> 
    </div>
 
    </Wrapper>
  )
}

export default Ourservices




 

   
   
