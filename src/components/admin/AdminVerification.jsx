import React from 'react';
import PropTypes from 'prop-types';

function AdminVerification(props){
  return(
    <div>
      <p>Are you an admininstator or have you been granted admininstator permissions?</p>
      <button onClick={props.onIsAdminConfirm}>Yes</button>
    </div>
  );
}

AdminVerification.propTypes = {
  onIsAdminConfirm: PropTypes.func
}

export default AdminVerification;
