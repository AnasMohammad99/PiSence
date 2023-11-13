import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import data from "../data (1).json"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const AppDashboard = () => {
  let PieDataGrades = [0,0]
  data["Behavioral Analytics"].map((grade)=>{
    if(grade==="good"){
      PieDataGrades[0]+=1
    } else {
      PieDataGrades[1]+=1
    }
    return 0
  })
  const PieData = {
    labels: ['Good', "Bad"],
    datasets: [
      {
        label: '# of grades',
        data: PieDataGrades,
        backgroundColor: [
          'green',
          'red',
        ],
        borderColor: [
          'green',
          'red',
        ],
        borderWidth: 1,
      },
    ],
  };
  const Wrapper = styled(Box)({
    backgroundColor: 'white',
    color:"black",
    padding: 10,
    margin:20,
    borderRadius: 5,
    height:"85vh",
    overflowY:"scroll",
  
    '&::-webkit-scrollbar': {
      display:"none"
    }, 
    '@media (max-width: 780px)': {
      overflowX:"scroll",
    }
  });
  return (
    <Wrapper>
      <Grid container spacing={2} style={{
        height:"100%",

      }}>
        <Grid item md={12}>
          <Box style={{
            backgroundColor:"lightgray",
            height:"100%",
          }}>
            <Typography>Attendence</Typography>
            <Grid container>
              {
                Object.entries(data["ATTENDANCE"]).map((day)=>{
                  return(
                    <Grid key={day[0]} md={2.4}><Typography>{day[0]}</Typography></Grid>
                  )
                })
              }
              {
                Object.entries(data["ATTENDANCE"]).map((day)=>{
                  return(
                    <Grid key={day[1].date} md={2.4}><Typography>{day[1].date}</Typography></Grid>
                  )
                })
              }
            </Grid>
            
            <Grid container style={{
              marginBottom:"10px",
              marginLeft:"100px"              
            }}>
            {
                Object.entries(data["ATTENDANCE"]).map((day)=>{
                  if(day[1].fn==="present"){
                    return(
                      <Grid item key={day[1].date} md={2.4}><Box style={{
                        backgroundColor:"green",
                        height:"20px",
                        width:"20px"
                      }}></Box></Grid>
                      )
                    }else{
                      return(
                        <Grid item key={day[1].date} md={2.4}><Box style={{
                          backgroundColor:"red",
                          height:"20px",
                          width:"20px"
                        }}></Box></Grid>
                      )
                    }
                })
              }
            </Grid>
            <Grid container style={{
              marginBottom:"10px",
              marginLeft:"100px"
            }}>
            {
                Object.entries(data["ATTENDANCE"]).map((day)=>{
                  if(day[1].an==="present"){
                    return(
                      <Grid item key={day[1].date} md={2.4}><Box style={{
                        backgroundColor:"green",
                        height:"20px",
                        width:"20px"
                      }}></Box></Grid>
                      )
                    }else{
                      return(
                        <Grid item key={day[1].date} md={2.4}><Box style={{
                          backgroundColor:"red",
                          height:"20px",
                          width:"20px"
                        }}></Box></Grid>
                      )
                    }
                })
              }
            </Grid>
          </Box>
        </Grid>
        <Grid item md={6}>
        <Box style={{
          backgroundColor:"lightgray",
          height:"100%",
        }}>
          <Grid container>
            <Grid item md={12}><Typography>Homework</Typography></Grid>
            {
                data["homework"].map((subject,index)=>{
                  return(
                    <Grid key={index} item md={6}><Typography>{subject}</Typography></Grid>
                  )
                })
            }
          </Grid>
        </Box>
        </Grid>
        <Grid item md={6}>
        <Box style={{
          backgroundColor:"lightgray",
          height:"100%",
        }}><Pie data={PieData} /></Box>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default AppDashboard