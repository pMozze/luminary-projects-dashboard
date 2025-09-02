import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import Card from './ui/Card';
import Members from './cards/members/Members';
import Performance from './cards/Performance';
import Tasks from './cards/Tasks';
import Comment from './Comment';

import type { Project as ProjectData } from '@/models/project.models';

const Project: FC<ProjectData> = ({ id, url, name, description, members, performance, tasks, lastComment }) => {
  return (
    <div className="flex flex-col p-8 max-md:p-4 bg-[#F5F4F7] rounded-4xl max-md:rounded-2xl">
      <a className="text-2xl font-semibold text-[#4A4A4A] no-underline w-fit" href={url}>
        Project: {name}
      </a>
      {description && (
        <div className="card p-4 mt-4">
          <div className="font-semibold text-[#545454]">Summary of the project</div>
          <div className="text-sm text-[#4A4A4A] mt-2">{description}</div>
        </div>
      )}
      <div
        className={twMerge(
          description ? 'mt-9' : 'mt-4',
          'max-md:mt-4 grid grid-cols-3 max-2xl:grid-cols-2 max-sm:grid-cols-1 gap-4'
        )}
      >
        <Card title="Project members">
          <Members projectId={id} {...members} />
        </Card>
        <Card title="Project performance">
          <Performance {...performance} />
        </Card>
        <Card title="Project tasks">
          <Tasks tasks={tasks} />
        </Card>
      </div>
      {lastComment && (
        <Comment className="mt-4" text={lastComment.comment} createdOn={lastComment.time} author={lastComment.author} />
      )}
    </div>
  );
};

export default Project;
