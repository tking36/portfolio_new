import React from 'react'
import { Container } from 'react-bootstrap';

const Hexagons = () => {

    const numRows = 11; // Number of rows
  const numHexagons = 20; // Number of hexagons per row

  const renderHexagons = () =>
    Array.from({ length: numRows }).map((_, rowIndex) => (
      <div className='row' key={rowIndex}>
        {Array.from({ length: numHexagons }).map((_, hexagonIndex) => (
          <div className='hexagon' key={hexagonIndex}></div>
        ))}
      </div>
    ));

  return (
    <Container fluid className='cont'>
            <div className='container background'>{renderHexagons()}</div>
            </Container>
  )
}

export default Hexagons