import { FC, useEffect } from 'react';

const App: FC = () => {
  useEffect(() => {
    fetch('http://localhost:3333/api', { method: 'PUT' })
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div>test app</div>;
};

export default App;
