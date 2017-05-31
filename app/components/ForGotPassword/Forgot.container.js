/**
 * @author Haris
 */
import React, { PropTypes } from 'react';
import { withNotifications } from 'bluerain-client-services';
import ForGotComponent from './Forgot.component';

class ForgotContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Next',
      disabled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(credentials) {
    const my = this;
    this.setState({'message':'Reset Your Password...','disabled': true});
    /*this.props.mutate({
      variables: {
        email: credentials.email.toLowerCase(),
      }
    })
      .then(({ data }) => {

        return my.props.data.refetch();
      })

      .then(({ data }) => {
        my.props.router.replace('/app');
      })
      .catch((error) => {
      console.log('Error')
      });*/
  }

  render() {
    return (
      <ForGotComponent
        message={this.state.message}
        disabled={this.state.disabled}
        onSubmit={credentials => this.handleSubmit(credentials)}
      />
    );
  }
}

// ForgotContainer.propTypes = {
//   mutate: PropTypes.func.isRequired
// };

export default withNotifications(ForgotContainer);
