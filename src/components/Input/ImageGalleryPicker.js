import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Icon from 'material-ui/Icon';

import { moveToFront } from '../../utils/arrayUtils';

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

const tileData = ['/images/anon.jpg', '/images/anon.png', '/images/kanye.jpg', '/images/taylor.jpg'];

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

    // reorder array so selectedImage is first, but not in render.
    this.tiles = moveToFront(tileData, selectedImage);
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
          {this.tiles.map(tile => (
            <GridListTile key={tile} onClick={() => this.selectImage(tile)}>
              <img src={tile} alt={tile} />
              <GridListTileBar
                title=""
                classes={{
                  root: classes.titleBar
                }}
                actionIcon={
                  tile === selectedImage ? (
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
