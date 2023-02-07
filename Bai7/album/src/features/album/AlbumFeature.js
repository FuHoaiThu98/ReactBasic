import React from 'react';
import ListAlbum from './list/ListAlbum';

function AlbumFeature(props) {
  const list = [
    {
      id: 1,
      img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/2/5/df251e59edff4c80cbd05a8807add66a.jpg',
      singer: 'TAEYEON',
      title: '(Naul) Single'
    },
    {
      id: 2,
      img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/4/1/a/341ace908cb906cc5ecf6951e53d31b3.jpg',
      singer: 'Thanh Dat',
      title: 'Tiec cho mot moi tinh'
    },
    {
      id: 3,
      img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/b/a/57ba603b66c05e9f3259419d2b13e633.jpg',
      singer: 'KxK',
      title: 'Lac nhau'
    },
    {
      id: 4,
      img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/b/8/b/9b8bd6f0f54e07370887f0ce1f62ebab.jpg',
      singer: 'Ice Cream Man. (Single)',
      title: 'Raye'
    },
  ]
  return (
      <ListAlbum data={list}></ListAlbum>
  );
}

export default AlbumFeature;