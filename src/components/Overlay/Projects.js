import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import common from '../../assets/commons.png'
import space from '../../assets/space.jpeg'
import portfolio from '../../assets/portfoli.png'
import research from '../../assets/research.png'
import dive from '../../assets/dive.jpeg'

function GlassProjectCard() {
    const handleClick = (http) => {
    // window.location.href = ;
    window.open(http, '_blank');
  }
    return (
    <div>
    <CardContent style={{backdropFilter: 'blur(0px)'}}>
        <Typography variant="h3" component="div" forWeight="bold" align="center" color="#FAB95B" sx={{fontWeight:'bold'}}>
        PROJECTS
        </Typography>
        <br/>
         <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <Button variant="outlined" sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}} style={{ color: 'white', borderColor: 'white', margin:'5px'}} onClick={()=>handleClick(item.http)}>VIEW</Button>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CardContent>
    </div>
  );
}

const itemData = [
  {
    img: common,
    title: 'commON SRL',
    author: '웹 개발 인턴쉽',
    rows: 2,
    cols: 2,
    http:`http://www.common-mag.com/`,
    featured: true,
  },
  {
    img: portfolio,
    title: 'Portfolio Website',
    author: '개인 포트폴리오 웹사이트 제작',
    http:`https://github.com/Lajancia/React_Website`,
  },
  {
    img: research,
    title: '리서치머니',
    author: 'SWYG 2차 사이드 프로젝트',
    http:`https://github.com/ReasearchMoney/Front_end`,
    cols: 2,
  },
  {
    img: dive,
    title: 'DEEP DIVE',
    author: '3D Blender 애니메이션 제작',
    http:`https://www.instagram.com/reel/Cr5BZhGrete/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`,
    cols: 2,
  },
  {
    img: space,
    title: 'SPACE',
    author: '3D Blender 애니메이션 제작',
    http:`https://www.instagram.com/p/CXDNGUzLxQQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`,
    rows: 2,
    cols: 2,
    featured: true,
  }
];


export default GlassProjectCard