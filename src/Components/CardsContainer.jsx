import Card from './Card'; // Asegúrate de importar el componente Card
import plates from '../data/plates'; // Asegúrate de importar el arreglo de plates

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px' // Agregamos un margen superior de 30px
  };
  
  const CardsContainer = () => {
    return (
      <div style={containerStyle}>
        {plates.map((plate) => (
          <Card key={plate.id} name={plate.name} img={plate.image} />
        ))}
      </div>
    );
  };


export default CardsContainer;
