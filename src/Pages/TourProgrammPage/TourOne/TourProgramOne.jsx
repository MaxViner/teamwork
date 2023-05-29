import React from 'react'
import { useParams } from 'react-router-dom';

const TourProgramOne= ()=> {
  const { id } = useParams();

  return (<div>
          <h1>Tour Program {id}</h1>
     
    </div>
  );
}

export default TourProgramOne