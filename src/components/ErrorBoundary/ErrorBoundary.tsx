import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback: (reloadCallback: () => void) => ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.handlerReload = this.handlerReload.bind(this);
    this.state = { hasError: false };
  }

  handlerReload() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.handlerReload);
    }

    return this.props.children;
  }
}
