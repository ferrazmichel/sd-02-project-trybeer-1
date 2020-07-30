import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Mostra uma UI alternativa
    this.setState({ hasError: true });
    // Você também pode registrar o erro em um serviço de relatório de erros
    console.log(error, info);
  }

  render() {
    console.log(this.state.hasError)
    if (this.state.hasError) {
      // Você pode renderizar qualquer alternativa de UI
      return <h1>Algo deu errado.</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
