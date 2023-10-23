import platillo from './../assets/platillo-principal.png';
import camioncito from './../assets/camioncito.jfif';
import canastita from './../assets/canastita.jfif';
import styled from '@emotion/styled';



export const Section = () => {
  return (
    <Contenedor className="contenedor">
      <div className="contenedor__img">
        <img src={platillo} alt="plato" />
      </div>

      <div className="contenedor__main">
        <div className="contenedor__body">
          <h4>Why choose var</h4>
          <h2> What's Make Our Food Delicious!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit atque aspernatur amet eaque laboriosam animi omnis inventore veritatis delectus!</p>
          <button>Read More</button>
        </div>

        <div className="contenedor__icons">
          <div className="contenedor__icon">
            <img src={camioncito} alt="camioncito" />
            <span>Fast Delivery</span>
          </div>

          <div className="contenedor__icon">
           <img src={canastita} alt="canastita" />
           <span>Fresh foot</span>
          </div>
        </div>
      </div>
    </Contenedor>
  )
}




//  ESTILOS EN --->  styled-components

const Contenedor = styled.section ` 
  display: flex;
  background-color: #F7F7F7;
  padding: 12px 0;
  height: 300px;

  .contenedor__img{
    width: 40%;
    height: 100%;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
      max-height: 300px;
      object-fit: cover;
    }
  }




  .contenedor__main{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .contenedor__body{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 8px;

      h4{
        color: #6FB295;
        font-weight: bolder;
        font-size: 24px;
        letter-spacing: 1px;
      }

      p{
        font-weight: lighter;
        font-size: 14px;
      }
      button{
        background-color: #FF7041;
        color: #fff;
        font-weight: 500;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
    }




    .contenedor__icons{
      display: flex;
      justify-content: flex-start;



      .contenedor__icon{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px;
        margin-right: 30px;
        

        img{
          width: 40px;
          height: auto;
          margin-right: 9px;
        }
      }
    }
  }



  @media screen and (max-width: 600px) {
    .contenedor__icons{
      display: none !important;
    }
    
  }


  @media screen and (min-width: 766px){
      .contenedor__main{
        justify-content: space-around;
      }
    
  }
  


` 

export default Section;