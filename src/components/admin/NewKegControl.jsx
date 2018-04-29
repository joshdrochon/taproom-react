import React from 'react';
import NewKegForm from './NewKegForm';
import AdminVerification from './AdminVerification';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleIsAdminConfirm = this.handleIsAdminConfirm.bind(this);
  }

  handleIsAdminConfirm(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    }else{
      currentlyVisibleContent = <AdminVerification onIsAdminConfirm={this.handleIsAdminConfirm} />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
