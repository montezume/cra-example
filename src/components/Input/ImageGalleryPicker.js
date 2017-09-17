import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Icon from 'material-ui/Icon';

const StyledIcon = styled(Icon)`
  font-size: 2em;
  color: white;
  margin: 8px;
`;

const StyledLabel = styled.label`
  // just copying the color from material-ui :)
  color: rgba(0,0,0,0.54);
  padding: 16px 0;
  display: block;
`;

// import StarBorderIcon from 'material-ui-icons/StarBorder';

const tileData = [
   {
     image: '/images/kanye.jpg',
     title: 'Image',
     author: 'author',
   },
   {
     image: '/images/taylor.jpg',
     title: 'Image',
     author: 'author',
   },
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class ImageGalleryPicker extends Component {
  constructor(props) {
    super(props);
    const { selectedImage } = this.props;
    this.state = {
      selectedImage: selectedImage || tileData[0].image
    }

    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(image) {
    const { onSelect } = this.props;

    this.setState({
      ...this.state,
      selectedImage: image
    });

    onSelect(image);
  }

  render() {
    const { classes } = this.props;

    const { selectedImage } = this.state;

    return (
      <div>
      <StyledLabel>
        Picture
      </StyledLabel>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.image} onClick={() => this.selectImage(tile.image)}>
              <img src={tile.image} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar
                }}
                actionIcon={
                  tile.image === selectedImage ? (
                    <StyledIcon selected>star</StyledIcon>
                  ) : (
                    <StyledIcon selected>star_outline</StyledIcon>
                  )
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(ImageGalleryPicker);
