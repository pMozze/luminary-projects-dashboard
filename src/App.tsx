import type { FC } from 'react';
import Project from './project/Project';

const App: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default App;
