import React from 'react';
import { Layout, Space, Spin } from 'antd';
import AppSidebar from './components/Sidebar';
import AppRoutes from './routes';
import { Avatar, Box, Typography } from '@mui/material';
const { Header, Sider, Content } = Layout;
const headerStyle = {
  // textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 20,
  // lineHeight: '64px',
  backgroundColor: '#7dbcea',
  display: "flex",
  width:"100%",
  justifyContent:"space-between"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
};
const App = ({news, Crypto, weather}) => {
  return(
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout style={{height:'100vh'}}>
      <Header style={headerStyle}>
          
      </Header>
      <Layout hasSider>
        <Sider theme="dark" style={siderStyle}><AppSidebar /></Sider>
        <Content style={contentStyle}><AppRoutes news={news} Crypto={Crypto} weather={weather} /></Content>
      </Layout>

    </Layout>
  </Space>
  )
};
export default App;



























// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import { Typography } from '@mui/material';

// const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
//     display:'flex',
//     justifyContent:'center',
//   }));

// export default function Layout({handleOpen}) {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <ToolbarWrapper>
//         <Typography variant="h4" style={{ textAlign:"center" }} color='white'>Team page</Typography>
//         </ToolbarWrapper>
//       </AppBar>
//     </Box>
//   );
// }
