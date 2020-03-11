import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Imagen = (props) =>{
    const{largeImageURL, likes, previewURL, views, tags} = props.imagen;
    
    return(
        <Card className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={previewURL}
                    alt={tags}
                />
                <CardContent>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p">
                            Views: {views} 
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p">
                            Likes: {likes}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a 
                    href={largeImageURL} 
                    target="_blank"
                    rel="noopener noreferrer">
                        {tags}
                </a>
            </CardActions>
            <br/>
        </Card>
    )
}

export default Imagen;