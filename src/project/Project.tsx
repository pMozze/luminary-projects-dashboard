import type { FC } from 'react';
import Card from './Card';

const Project: FC = () => {
  return (
    <div className="p-8 bg-[#F5F4F7] rounded-4xl">
      <div className="text-2xl font-semibold text-[#4A4A4A]">Project: DB</div>
      <div className="card p-4 mt-4">
        <div className="font-semibold text-[#545454]">Summary of the project</div>
        <div className="text-sm text-[#4A4A4A] mt-2">
          Implement a full user flow for purchasing, viewing, and managing lounge passes via DragonPass. The flow should
          include browsing lounges nearby or by airport, viewing lounge details, purchasing passes, accessing and
          displaying QR codes, and requesting refunds under eligible conditions.
        </div>
      </div>
      <div className="mt-9 grid grid-cols-3 gap-4">
        <Card title="Project members">123</Card>
        <Card title="Project perfomance"></Card>
        <Card title="Project tasks"></Card>
      </div>
    </div>
  );
};

export default Project;
