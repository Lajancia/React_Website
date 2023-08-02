import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function GlassCareerCard() {
    return (
    <div>
    <CardContent style={{backdropFilter: 'blur(0px)'}} >
        <Typography variant="h3" component="div" fontWeight="bold" align="center" color="#FAB95B" sx={{fontWeight:'bold'}}>
        CAREER
        </Typography>
        <br/>
        <Paper style={{maxHeight: '50vh', overflow: 'scroll', backgroundColor:'transparent', color:'white'}} elevation={0}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" m={4} style={{maxWidth: '100%'}}>
        <Grid xs={12} sm={3}>
            <Typography variant="h3" component="div" fontWeight="bold" align="center">
            WORK
            </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
            <Typography variant="h5" component="div" fontWeight="bold" align="left"  color="#F5564E" mb={2} sx={{fontWeight:'bold'}}>
            (주)유라
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                2022.10 ~ 현재
            </Typography>
            <Typography variant="subtitle1" component="div" fontWeight="bold" align="left" mb={2}>
                전세계 자동차 제조에 필요한 부품을 생산하고 납품하는 자동차 부품 생산 업체입니다. 생산 뿐만 아니라 스마트 책토리 솔루션 및 컨설팅을 함께 진행하고 있습니다.
                <br/><br/>
                기본적으로 스마트 팩토리 솔루션 웹개발자로 리액트 프론트엔드 개발 및 Java Spring Boot 백엔드 개발을 담당하고 있으며, 해외 생산 현장과의 커뮤니케이션 및 데이터 분석 솔루션 프로젝트 진행에도 참여하고 있습니다.
            </Typography>
            <Divider color="#F5564E"/>
            <br/>
            <Typography variant="subtitle1" component="div" fontWeight="bold" align="left" mb={2} color="#FAB95B">
                세르비아 전장 스마트 팩토리 구축 프로젝트 (2023.01 ~ 2023.06 총 5개월)
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - 세르비아에 새로 들어선 생산 공장의 효율적인 생산 관리와 데이터 수집, 그리고 분석을 목표로 함. 프로젝트 결과 불량률이 60%로 높은 특정 라인들의 직행률을 스마트 모니터링 웹에서 수치적으로 확인하여 현재 생산의 불량률을 40%로 낮출 수 있었고, 전체 AOI 생산 직행률을 개선할 수 있었음.
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - 빅데이터 솔루션을 위한 데이터 파싱 프로그램을 Java로 개발함. 수집된 설비 데이터의 텍스트에서 규칙에 따른 유의미한 데이터를 추출하여 Maria Database로 저장하는 동작을 수행함. 개발된 프로그램은 Linux 서버에서 동작하고 있으며, Cron table을 통해 지정된 시간 동안 동작을 수행하고 종료되어 메모리 사용 효율을 높임.
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - 생산 직행률을 확인할 수 있는 리액트 웹 개발 및 웹에 필요한 API 개발을 성공적으로 완료함. 웹 개발 프레임워크는 React.js를 사용하였으며, API 개발은 Java Spring Boot로 진행. 생산 흐름을 파악하기 위한 직행률 %를 라인별, 유닛별로 데이터베이스에서 조회한 뒤 계산 결과를 호출하는 API 개발.
            </Typography>
        </Grid>
        <Grid xs={12}/>             
       </Grid>
       <Grid container spacing={2} justifyContent="center" alignItems="center" m={4} style={{maxWidth: '100%'}}>
        <Grid xs={12} sm={3}>
            <Typography variant="h4" component="div" fontWeight="bold" align="center">
            INTERN
            </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
            <Typography variant="h5" component="div" fontWeight="bold" align="left"  color="#F5564E" mb={2} sx={{fontWeight:'bold'}}>
            commON SRL
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                2021.11 ~ 2022.05
            </Typography>
            <Typography variant="subtitle1" component="div" fontWeight="bold" align="left" mb={2}>
                commON SRL은 이탈리아 패션 잡지 출판 회사입니다. 이곳에서 저는 웹 개발 인턴으로 근무하였으며, 11월 부터 2월 말 까지 비대면 원격 근무를 하였으며, 3월부터 5월 까지 이탈리아 밀라노 현지에서 근무를 하였습니다.
                <br/><br/>
                Vue.js 프레임워크를 활용하여 commON SRL에서 출판되는 잡지를 디스플레이하는 웹 페이지를 개발하고 현재까지 진행해온 여러 프로젝트 아카이브를 저장할 수 있도록 디자이너들과 함께 협력하며 개발하였습니다.
            </Typography>
            <Divider color="#F5564E"/>
            <br/>
            <Typography variant="subtitle1" component="div" fontWeight="bold" align="left" mb={2} color="#FAB95B">
                commON SRL 홈페이지 개발 (2021.11 ~ 2022.05 총 7개월)
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - Vue.js 프레임워크를 활용하여 프론트엔드 제작을 하였습니다. 동적인 느낌을 줄 수 있도록 개발
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - 디자이너와의 의견을 조율하고 소통하는 경험을 쌓을 수 있었음
            </Typography>
            <Typography variant="caption" component="div" fontWeight="bold" align="left" mb={2}>
                - 현재 개발 완료된 웹사이트는 신간이 출판될 때 마다 업데이터 되고 있으며, 아티스트들의 새로운 작품을 홍보하고 열람할 수 있는 공식 웹사이트로 운용중
            </Typography>
        </Grid>
        <Grid xs={12}/>             
       </Grid>
       </Paper>
      </CardContent>
    </div>
  );
}


export default GlassCareerCard