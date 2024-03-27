
import React, { useState } from 'react';
import styled from 'styled-components';



const Wrapper =styled.section`
/* z-index: 5; */
position: absolute;
top:0;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;


.header{
    /* padding-bottom: 8%; */
    z-index: 3;
   height: 117px;
   position: absolute;
   top: 0px;
   display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;   
}

p{
    margin-left: 20px;
    line-height: 1.2;
    margin-right: 150px;
}

/* .active{
    font-weight:bolder;
} */
ul{
   gap : 40px;
    z-index: 4;
    position: absolute;
   left : 0;
top: 0;  
width: 100%;
height: 100vh;
background:#1B0B06;
max-width:0;
overflow: hidden;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
transition:all 0.7s ease-in-out;
margin: 0 !important;
padding: 0 !important;
& li:hover {
    background-color: blue;

  }

}
ul li {
position: relative;
    display: block;
    color:#F1F1FE;
    font-weight:bolder ;
    padding: 10px;
    width: max-content;
    margin-left:31px
    /* transition: all .4s ease-in-out;  */

} 


 a {
    text-decoration: none;
    color: #F1F1FE;
    font-size: 20px;
    font-weight: bolder;
    width: max-content;
}
/* 
.active{
    text-decoration: underline;  
   color: #FFFFFF;
} */
.hamburger{
  border: 3px solid white;
  /* left: 42px; */
  right: 20px;
    padding:20px 37px 20px 6px;
      position: absolute;
      /* margin-right:0px; */
      /* transition:all 0.7s ease; */
      z-index:9;
}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 40px;
    height: 4px;
    background:#000;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
   background:#000;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
     background:#000;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}


.open{
    transition:all 300ms ease;
    span{
        background:transparent;
        &:before{
       transform: rotate(496deg);
   top: 0;
    }
    &:after{
        transform: rotate(-496deg);
        top: 0;
    }
    }
}
.change{
    top: 0;
max-width:100%;

}

@media (min-width: 568px) {
  ul li {
position: relative;
    display: block;
    font-size: 20px;
    color:#F1F1FE;
    font-weight:bolder ;
    padding: 10px;
    width: max-content;
    /* transition: all .4s ease-in-out;  */
    /* :before{
    position: absolute;
content: '';
width: 100%;
height: 2px;
background: red;
top: -30px;
  } */
} 
}

@media (min-width: 768px) {

    .header{
        height: 150px;
    }
    ul{
        height: 51vh;
        transition:all 0.7s ease-in-out;
        li{
            font-size: 20px;
            margin-left: 60px;
        }
        a{}
    }

p{
    margin-left: 40px;
    line-height: 1.4;
    margin-right: 500px;
}
  
   /* img {
    width: 42%;
} */
.hamburger{
  right: 30px;
    padding:20px 47px 20px 9px;

}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 45px;
    height: 3px;
    background:#000;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
   background:#000;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
     background:#000;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
}

@media (min-width: 992px) {

p{
    margin-left: 60px;
    line-height: 1.4;
    margin-right: 750px;
}
.hamburger{
  right: 90px !important;
    padding:20px 47px 20px 9px;
    border: none;

}
 ul{
  height: 50vh;
 }
 .change{
    top: 0;
max-width:100%;

}
}


@media (min-width: 1200px) {
  .hamburger{
  left: 60px;


}
  span{
    
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 45px;
    height: 3px;
    background:#000;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
   background:#000;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
     background:#000;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
  
 ul{
  height: 100vh;
        transition:all 0.7s ease-in-out;
        li{
            font-size: 18px;
            margin-left: 60px;
            font-weight: 400;
        }
        a{}
    }
 .change{
    top: 0;
max-width:100%;

}

p{
    margin-left: 140px;
    line-height: 1.7;
    margin-right: 1000px;
}
.hamburger{
  right: 120px !important;
    padding:20px 47px 20px 9px;

}
}
`



const LinkText = styled.span`
  position: absolute;
  top: 0;
  left:500px ;
  text-decoration:none;
  /* padding: 8px; */
  background-color: none;
  color: #fff;
  font-family: ${(props)=>props.theme.fam.bold};

  font-size: 10px;
  /* opacity: 0; */
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  .eMQXca ul li &:before{
  width: 0;
  height: 0;
  background: none;
}
`;


const Nav = () => {
  const [click, setClick] = useState(false);

  const handleHover = (e) => {
    const linkText = e.target.getAttribute('data-text');
    const textElement = e.target.querySelector('span');

    if (linkText && textElement) {
      textElement.textContent = linkText;
      textElement.style.opacity = 1;
      textElement.style.right = '100%';
    }
  };

  const handleLeave = (e) => {
    const textElement = e.target.querySelector('span');
    if (textElement) {
      textElement.style.opacity = 0;
      textElement.style.right = '-100%';
    }
  };

  return (
    <Wrapper>
      <div className="header">
        <div
          className={click ? 'hamburger open' : 'hamburger'}
          onClick={() => setClick(!click)} >
          <span></span>
        </div>

<p>PERFECTION IS ALWAYS UNDER CONSTRUCTION</p>
        <ul className={click ? 'change' : ''}>
          <li
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            data-text="About"
          >
            {/* <LinkText></LinkText> */}
Home          </li>
          <li
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            data-text="Portfolio"
          >
            {/* <LinkText></LinkText> */}
About          </li>
          <li
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            data-text="GetInTouch"
          >
            {/* <LinkText></LinkText> */}
            Service
          </li>
          <li
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            data-text="GetInTouch"
          >
            {/* <LinkText></LinkText> */}
            Contact
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Nav;

























