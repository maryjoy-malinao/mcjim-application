import  React, { useState } from 'react';
import { useRouter } from 'next/router'
import { styled, 
          Card, 
          CardHeader, 
          CardMedia, 
          CardContent, 
          CardActions, 
          Collapse, 
          Avatar, 
          IconButton,
          Box, 
          BottomNavigation, 
          BottomNavigationAction 
} from '@mui/material';

import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import { Button } from 'semantic-ui-react'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({jobId, title, location, description, type, career, specialization}) {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 600 }} className='PostCard'>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{title[0]}</Avatar>
          }
          title={title}
          subheader={location}
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Box>
            <BottomNavigation showLabels>
              <BottomNavigationAction label={type} icon={<WorkIcon />} />
              <BottomNavigationAction label={specialization} icon={<BuildIcon />} />
              <BottomNavigationAction label={career} icon={<SchoolIcon />} />
            </BottomNavigation>
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <Button color='orange' onClick={()=> router.push(`/careers/apply/${jobId}`)}>Apply Now</Button>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{description}</CardContent>
        </Collapse>
      </Card>
    </div>
  );
}