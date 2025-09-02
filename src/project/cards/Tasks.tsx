import type { FC } from 'react';
import { fromUnixTime, formatDate } from 'date-fns';

import type { Task } from '@/models/project.models';

interface Props {
  tasks: Task[];
}

const Tasks: FC<Props> = ({ tasks }) => {
  return (
    <table className="table-fixed w-full border-collapse">
      <thead>
        <tr>
          <th className="p-0 pb-2 w-[50%] border-b-1 border-[#C9C9C9] text-start text-tiny text-[#000000] font-normal">
            Task Name
          </th>
          <th className="p-0 pb-2 w-[25%] border-b-1 border-[#C9C9C9] text-center text-tiny text-[#000000] font-normal">
            Assignee
          </th>
          <th className="p-0 pb-2 w-[25%] border-b-1 border-[#C9C9C9] text-start text-tiny text-[#000000] font-normal">
            Deadline
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.slice(0, 3).map((task, taskId) => (
          <tr key={taskId}>
            <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-xs text-[#000000]">
              <a className="text-inherit no-underline" href={task.url}>
                {task.name}
              </a>
            </td>
            <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-center align-middle">
              <a href={task.assignee.url} title={task.assignee.fullName}>
                <img className="w-4 h-4 rounded-full" src={task.assignee.avatar} alt="" />
              </a>
            </td>
            <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-tiny text-[#000000]">
              {!!task.deadline && formatDate(fromUnixTime(task.deadline), 'dd.MM.yyyy')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tasks;
