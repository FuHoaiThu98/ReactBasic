import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../item/AlbumItem'
import './styles.css'
listAlbum.propTypes = {
  data: PropTypes.array
};

listAlbum.defaultProps = {
  data: []
}

function listAlbum(props) {
  const {data} = props;
  return (
    <div className='list'>
      {data.map(album => (
        <AlbumItem key={album.id} data={album}></AlbumItem>
      ))}
    </div>
  );
}

export default listAlbum;