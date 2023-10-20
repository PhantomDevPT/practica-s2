import styled from '@emotion/styled';

const CardContainer = styled.div`
  height: 80px;
  width: 120px;
  background-color: #dfdfdf;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

const Card = ({name,img}) => {
  return (
    <CardContainer>
      <Image src={img} alt={name} />
      <Description>{name}</Description>
    </CardContainer>
  );
};

export default Card;

