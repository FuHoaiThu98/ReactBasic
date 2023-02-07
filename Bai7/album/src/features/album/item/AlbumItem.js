import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
AlbumItem.propTypes = {
  data: PropTypes.object
};
AlbumItem.defaultProps = {
  data: {
    title: ''
  }
}

function AlbumItem(props) {
  const {data} = props;
  return (
    <div className='item'>
      <img src={data.img} className="item__img" />
      <p>{data.title}</p>
      <p>{data.singer}</p>
    </div>
  );
}

export default AlbumItem;