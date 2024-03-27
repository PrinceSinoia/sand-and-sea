import React ,{useState} from 'react'
import styled from 'styled-components'
// import TextField from '@mui/material/TextField';




const Wrapper= styled.section`
 .letsTalk{
    padding-top: 2%;
    padding-bottom: 6%;
  }
 
  h2{
    margin-left: 15px;
    padding-bottom: 3%;
    /* font-family:${props => props.theme.fam.bold}; */
  }
  .letsTalk h2 span{
   color:#3989B2; 
   /* font-family:"Montserrat-LightItalic";  */
   /* font-family:${props => props.theme.fam.LightItalic}; */
  }
  .letsTalk p{
    color:#8C8C8C;
    padding: 0 15px;
    margin-right: 60px;
  }
  .div-form-1{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .css-7209ej-MuiInputBase-input-MuiFilledInput-input {
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding-bottom: 120px;
}
 
form{
    padding-bottom: 0%;
    padding-top: 8%;
    margin-left: 15px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
      background:#e1e1e1;
      height:100%;
      [data-shrink="true"]{
        color:yellow;
      }
        &:before{
          background:skyblue !important;
        }
      
    }
    .css-1ff8729-MuiInputBase-root-MuiFilledInput-root{
      &:after{
        background-color:green;
      }
    }
    
}
.name-input{
border: none;
    background: #F2F2F2;
    height: 50px;
 width: 94%;
 
}

.message-input{
    background: #F2F2F2;
    height: 150px;
  width: 95%;
    border: none;  
}

.letstalk-link-button-div{
    padding-top: 8%;
    padding-bottom: 0%;
}

.letstalk-link-send{
    float: right;
    color: #000;
    padding: 25px 40px;
    background:#F2F2F2;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;

    margin-right: 20px;
  }
  
.letstalk-link-send::before {
    content: "";
    width:70px;
    background: #545454;
    height:2px;
    position:absolute;
    left:-40px;
    top:35px;
    transition: transform 0.2s ease-in-out;
}
  
.letstalk-link-send:hover::before {
    position:absolute;
    left:22px;
    top:20px;
    transform: scaleX(1);

  } 



  @media (min-width:768px) {
    .letsTalk{
        padding-top:5%;
        padding-bottom: 0%;
      }
    h2{
        margin-left: 25px;
        padding-bottom: 3%;
      }   

      .letsTalk p{
        padding: 0 25px;
        margin-right: 290px;
        line-height: 1.3;
      }

      .css-7209ej-MuiInputBase-input-MuiFilledInput-input {
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding-bottom: 135px;
    width: 175px;
}

       form{
        padding-top: 8%;
        padding-bottom: 0%;
        display: flex;
        gap: 208px;
        /* gap: 200px; */
        flex-direction: row; 
        margin-left: 20px;
        margin-right: 20px;

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
      background:#e1e1e1;
      height:100%;
      [data-shrink="true"]{
        color:yellow;
      }
        &:before{
          background:skyblue !important;
        }
      
    }
    .css-1ff8729-MuiInputBase-root-MuiFilledInput-root{
      &:after{
        background-color:green;
      }
    }
    }


    .letstalk-link-button-div{
        padding-top: 5%;
        padding-bottom: 1%;
    }
    .name-input{
        height:70px;
     width: 200%;
        border: none;
    }
   
    .message-input{
        height: 235px;
      /* width: 260%; */
      width: 165%;
        border: none;  
    }

     
}


@media (min-width:992px) {
    .letsTalk{
        padding-top:5%;
        padding-bottom: 3%;
      }
    .letsTalk p{
        padding: 0 25px;
        margin-right: 590px;
        line-height: 1.3;
      } 
  

      .name-input{
        height:70px;
     width: 260%;
        border: none;
    }
   
    .message-input{
        height: 240px;
        width: 235%;
        border: none;  
    }

    .letsTalk  button{
        border: none;
        margin-right: 24px;
    width: 190px;
    height: 65px;
    }

    .letstalk-link-button-div{
        padding-top: 2%;
        padding-bottom: 1%;
    }
    form{
        padding-top: 5%;
        gap: 336px;

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
      background:#e1e1e1;
      height:100%;
      [data-shrink="true"]{
        color:yellow;
      }
        &:before{
          background:skyblue !important;
        }
      
    }
    .css-1ff8729-MuiInputBase-root-MuiFilledInput-root{
      &:after{
        background-color:green;
      }
    }
    }
    .div-form-1{
        display: flex;
        flex-direction: column;
        gap: 15px;
      }



      .css-7209ej-MuiInputBase-input-MuiFilledInput-input {
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding-bottom: 135px;
    width: 170px;
}
  
}

@media (min-width:1200px) {


  .css-7209ej-MuiInputBase-input-MuiFilledInput-input {
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding-bottom: 278px;
    width: 188px;
}

 .letsTalk{
     padding-top:1%;
     padding-bottom: 6%;
   }
 form{
     padding-top: 4%;
     /* gap: 360px;  */
     gap: 363px;
     margin-left: 98px;
     margin-right: 0px;


     .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
      background:#e1e1e1;
      height:102px ;
      [data-shrink="true"]{
        color:yellow;
      }
        &:before{
          background:skyblue !important;
        }
      
    }
    .css-1ff8729-MuiInputBase-root-MuiFilledInput-root{
      &:after{
        background-color:green;
      }
    }
 }




 .css-10botns-MuiInputBase-input-MuiFilledInput-input {
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    margin-bottom: 45px;
}

 .name-input{
  /* height: 102px ; */
    width: 325%;
    height: 100px;
     border: none;
 }

 .message-input{
     height: 336px !important;
   /* width: 450%; */
   width: 310%;
     border: none;  
 }


 .letsTalk p{
     line-height: 1.7;
     padding: 0 102px;
     margin-right: 693px;
   } 
     .letsTalk h2{
         font-size: 45px;
     margin-left: 109px;
     padding-bottom: 3%;
   }   


   .letstalk-link-send{
    float: right;
    padding: 22px 25px;
    background:#F2F2F2;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
    margin-right: 101px;
  }

  .letstalk-link-send::before {
    content: "";
    width:65px;
    background: #545454;
    height:2px;
    position:absolute;
    left:-50px;
    top:30px;
    transition: .5s ease-in-out;
    /* transition: transform 0.2s ease-in-out; */
}
  
.letstalk-link-send:hover::before {
    position:absolute;
    left:27px;
    top:40px;
    transform: scaleX(1);

  } 
}


`

function Letstalk() {
  return (
    <Wrapper>
        <div class="letsTalk">
        <div class="letsTalk-h2-p-combo">
            <h2>LET'S <span>TALK</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>





         <form> 
             <div class="div-form-1">
            {/* <TextField id="filled-basic" label="NAME" variant="filled"className='name-input'  /> */}
            {/* <TextField id="filled-basic" label="PHONE" variant="filled"className='name-input' /> */}
            {/* <TextField id="filled-basic" label="EXAMPLE@MAIL.COM" variant="filled" className='name-input'/>   */}

                <input class='name-input' type="text" placeholder="NAME"/>  
                 <input class='name-input' type="text" placeholder="PHONE"/>
                <input class='name-input' type="text" placeholder="EXAMPLE@MAIL.COM"/>  
             </div>
            <div class="div">

             <input
          id="filled-textarea"
          label="SEND MESSAGE"
          placeholder="SEND MESSAGE"
          multiline
          variant="filled" className='message-input'
        /> 
             {/* <TextField
          id="filled-textarea"
          label="SEND MESSAGE"
          placeholder="SEND MESSAGE"
          multiline
          variant="filled" className='message-input'
        />  */}

             </div> 
         </form>  

 
        
<div class="letstalk-link-button-div">


        
</div>
    </div>
    </Wrapper>
  )
}

export default Letstalk
