import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { Project as ProjectData } from './models';
import Project from './project/Project';

const App: FC = () => {
  const { data: projects } = useQuery<ProjectData[]>({
    queryKey: ['projects'],
    queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/projects`).then(response => response.json()),
    refetchInterval: 5000
  });

  if (!projects) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 max-2xl:grid-cols-1 gap-8">
      {projects.map((project, projectIndex) => (
        <Project
          key={projectIndex}
          name={project.name}
          description={project.description}
          members={project.members}
          perfomance={project.perfomance}
          tasks={project.tasks}
          lastComment={project.lastComment}
        />
      ))}
    </div>
  );
};

export default App;
