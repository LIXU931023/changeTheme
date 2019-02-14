import React from 'react';
import Loadimg from '../../common/img/loading.gif';

const backAndTextColor = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};
const Loading = () => (
  <div style={backAndTextColor}>
    <img src={Loadimg} alt="loading" />
  </div>
  );
export default Loading;
