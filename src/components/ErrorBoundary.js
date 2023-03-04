import {Component} from "react";
import classes from './Users.module.css';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {hasError: false}
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className={classes.users}>
          <p>Something went wrong!</p>
        </div>
      )}
    return this.props.children;
  }
}

export default ErrorBoundary;