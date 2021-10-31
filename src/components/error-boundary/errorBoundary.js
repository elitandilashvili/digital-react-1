import react from 'react';

export class ErrorBoundary extends react.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="column">
          <div className="box">
            <h2 className="has-text-color-danger">something went wrong...</h2>
            <p>{error.toString()}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
