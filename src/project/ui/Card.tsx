import type { FC, PropsWithChildren } from 'react';

interface Props {
  title: string;
}

const Card: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="card pt-2 px-3 pb-6">
      <div className="text-center text-xs text-[#000000] pb-4 mb-4 border-b border-[#000000]">{title}</div>
      {children}
    </div>
  );
};

export default Card;
