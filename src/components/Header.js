/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
    padding-top: 45px;
    position:absolute;
    display:flex;
    transition: all 300ms ease;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    align-items:center;
    transform:translate3d(0, 0, 0);

 .fst-p{
  padding: 0 20px;
  margin-right: 50px;
 
}

.menu{
    }
    .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:30px;
      transition:all 0.7s ease;
      z-index:3;
    
      
      span{
        width:30px;
        height:1px;
        background:black;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background:black;
          /* background: #fff; */
          top:-5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: black;
          top:5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
    }
.open{
        outline-color:#000;
        span{
          background:black;
            /* background:transparent; */
            &:after{
                top:0;
                transform:rotate(-585deg);
                background:#000;
            }
            &:before{
                top:0;
                transform:rotate(-495deg);
                background:#000;
               
            }
        }
    }

.change{
        max-height:100vh;
    }

@media (min-width:768px) {
  
  .fst-p{
    padding: 0 0px;
    line-height: 30px;
    margin-left: 62px;
margin-right: 436px;

}
.change{
        max-height:50vh;
    }

.hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:10px;
      transition:all 0.7s ease;
      z-index:3;
            }
}

    @media(min-width:992px){
        width: 100%;
    padding-top: 30px;
    gap: 175px;
    margin-right: 40px;


    .change{
        max-height:50vh;
    }

    }

@media (min-width:1200px) {

  padding-top: 85px;
    position:absolute;
    display:flex;
    transition: all 300ms ease;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    align-items:center;
    transform:translate3d(0, 0, 0);

    .prince{
        width:100px;
        z-index:3;
        transition:all 0.7s ease;
    }
     
    .change{
        max-height:100vh;
    }

    }

    @media(min-width:992px){
            margin-right:5%;
            .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:50px;
      transition:all 0.7s ease;
      z-index:3;
            }

            .fst-p{
 
  padding: 0px 0px;
    margin-right: 531px;
    margin-left: 49px;

}
        }

    @media(min-width:992px){
          /* display:none; */
      }

    ul{
        position:absolute;
        width:100%;
        height:100vh;
        background:#fff;
        top:0;
        right:0;
        display:flex;
        transition:all 0.7s ease;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        z-index:1;
        max-height:0;
        overflow:hidden;
        @media(min-width:768px){
            height:720px;
            
        }

       
        li{
            &:hover{
                a{
                    color:lightgreen;
                    border:2px solid lightgreen;
                    /* width: 100%; */
          
                }
            }
            @media(min-width:992px){
                margin:0 10px;
                &:hover{
                   a{
                    color:lightgreen;
                   }
                }
            }
            a{
                font-family:Arial, Helvetica, sans-serif;
                display:block;
                padding:20px;
                cursor:pointer;
                transition:all 0.7s ease;
                
                @media(min-width:992px){
                    color:#ffffff;
                }
            }
            &:last-child{
              @media(min-width:992px){
                 max-height:40px;
                margin-left:30px;
              }
               

                a{
                    @media(min-width:992px){
                        padding:10px 30px;
                        background:#fff;
                        border:1px solid #fff;
                        color:green;
                   &:hover{
                       background:transparent;
                       color:lightgreen;
                   }
                    }
                }
            }
            &:last-child{

            }
        }
    }
   



    @media (min-width: 1200px) {
      .fst-p{
    padding: 0px 0px;
    margin-right: 621px;
    line-height: 44px;
    letter-spacing: 4px;
    margin-left: 129px;
  
}


.hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:130px;
      transition:all 0.7s ease;
      z-index:3;
    }
    span{
        width:100px;
        height:15px;
        background:black;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background:black;
      
          top:-20px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: black;
          top:11px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
  }


 
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper >
      <p class="fst-p">PERFECTION IS ALWAYS UNDER CONSTRUCTION</p>
      <div className="menu">
        <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
