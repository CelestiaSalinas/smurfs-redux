import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createSmurf } from '../actions/actions'
import styled from 'styled-components';

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #D9C2ED;
  width: 40%;
  margin: 0 auto;
  border-radius: 5px;
  }
`;

const Label = styled.label`
font-size: 20px;
`

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #431070;
  border: 2px solid #431070;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin:30px;
  &:hover {
    background-color: #8b3ad6;
    color: white;
  }`

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });

  
  const handleSubmit = e => {
    e.preventDefault();
    props.createSmurf(smurf);
    

  };

  const handleChanges = (e) => {
    setSmurf({
        ...smurf,
        [e.target.name]: e.target.value
    })
}

    return (
        <form onClick={handleSubmit}>
            <Label><label>Name</label></Label>
            <Input type="text" name="name" onChange={handleChanges} value={smurf.name}/>
            <br />
            <Label><label>Age</label></Label>
            <Input type="text" name="age" onChange={handleChanges} value={smurf.age}/>
            <br />
            <Label><label>Height</label></Label>
            <Input type="text" name="height" onChange={handleChanges} value={smurf.height}/>
            <br />
            <Button type='submit' >Submit</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs
    }
}

export default connect(mapStateToProps, { createSmurf }) (SmurfForm)
