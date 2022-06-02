import './App.css';
import Heroes from '../src/Error Boundary/Heroes'
import ErrorBoundary from '../src/Error Boundary/ErrorBoundary'

function App() {
  return (
    <>
      <ErrorBoundary>
        <Heroes name="joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heroes name="superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heroes name="batman" />
      </ErrorBoundary>
    </>
  );

}

export default App;
