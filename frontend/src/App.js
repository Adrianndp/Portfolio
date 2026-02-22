import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("/api/test")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>Hello world</>
  );
}

export default App;
