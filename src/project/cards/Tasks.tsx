import type { FC } from 'react';
import type { Task } from '@/models';

interface Props {
  tasks: Task[];
}

const Tasks: FC<Props> = ({ tasks }) => {
  return (
    <table className="table-fixed w-full border-collapse">
      <thead>
        <tr>
          <th className="p-0 pb-2 w-[55%] border-b-1 border-[#C9C9C9] text-start text-tiny text-[#000000] font-normal">
            Task Name
          </th>
          <th className="p-0 px-3 pb-2 border-b-1 border-[#C9C9C9] text-center text-tiny text-[#000000] font-normal">
            Assignee
          </th>
          <th className="p-0 pb-2 border-b-1 border-[#C9C9C9] text-start text-tiny text-[#000000] font-normal">
            Deadline
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-xs text-[#000000]">
            Transfer Between Bank accounts
          </td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-center align-middle">
            <img className="w-4 h-4 rounded-full" src="https://placehold.co/16x16/EEE/31343C" alt="" />
          </td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-tiny text-[#000000]">16.08.2025</td>
        </tr>
        <tr>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-xs text-[#000000]">Admin Panel</td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-center align-middle">
            <img className="w-4 h-4 rounded-full" src="https://placehold.co/16x16/EEE/31343C" alt="" />
          </td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-tiny text-[#000000]">20.08.2025</td>
        </tr>
        <tr>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-xs text-[#000000]">API Integrations</td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-center align-middle">
            <img className="w-4 h-4 rounded-full" src="https://placehold.co/16x16/EEE/31343C" alt="" />
          </td>
          <td className="p-0 pt-4 pb-2 border-b-1 border-[#C9C9C9] text-tiny text-[#000000]">25.08.2025</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tasks;
