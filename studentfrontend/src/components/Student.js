import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Paper } from '@mui/material';

export default function Student() {

  const[name ,setName]= React.useState('')
  const[address,setAddress] = React.useState('')
  const[students,setStudents] =React.useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{method:"POST",headers:{"Content-type":"application/json"}, body:JSON.stringify(student)})
    .then(()=>{

        console.log("New Student Added")
    })
   
  }
  useEffect(()=>
    {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }

    )   
    },[])
      
  return (

    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

    <TextField id="standard-basic" label="Student Name" variant="standard" 
    value={name} onChange={(e)=>setName(e.target.value)}/>


    <TextField id="standard-basic" label="Student Address" variant="standard" 
    value={address} onChange={(e)=>setAddress(e.target.value)}/>
          <Button variant="contained" endIcon={<SendIcon />} onClick ={handleClick}>
        Send

      </Button>
      <h1>Students</h1>

    <Paper elevation={3} >

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
    }

    </Paper>
    
            
    </Box>
  );
}
