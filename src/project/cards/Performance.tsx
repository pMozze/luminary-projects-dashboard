import { useMemo, type FC } from 'react';
import { fromUnixTime, formatDate } from 'date-fns';
import chroma from 'chroma-js';
import type { Performance as PerformanceData } from '@/models/project.models';

const Performance: FC<PerformanceData> = ({ start, latestUpdate, deadline, progress, chart }) => {
  const chartValuesTotal = useMemo(() => chart.planned + chart.ongoing + chart.overdue, [chart]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="w-fit py-1 px-2 text-tiny text-[#545454] rounded-lg bg-[#D9D1FF]">
            <span className="font-semibold">Start - </span>
            <span>{formatDate(fromUnixTime(start), 'dd.MM.yy')}</span>
          </div>
          <div className="w-fit py-1 px-2 text-tiny text-[#545454] rounded-lg bg-[#B7F2D5]">
            <span className="font-semibold">Latest update - </span>
            <span>{formatDate(fromUnixTime(latestUpdate), 'dd.MM.yy')}</span>
          </div>
          {!!deadline && (
            <div className="w-fit py-1 px-2 text-tiny text-[#545454] rounded-lg bg-[#F3F2AC]">
              <span className="font-semibold">Deadline - </span>
              <span>{formatDate(fromUnixTime(deadline), 'dd.MM.yy')}</span>
            </div>
          )}
        </div>
        <div className="w-[74px] h-[74px] rounded-full border-3 border-[#30C6F6] p-[3px]">
          <div
            className="flex gap-0.5 justify-center items-center w-full h-full rounded-full font-light text-[#000000]"
            style={{
              backgroundColor: chroma
                .scale(['#D95350', '#F5D06D', '#74C991'])(progress / 100)
                .hex()
            }}
          >
            <span className="text-[22px] leading-none proportional-nums">{progress}</span>
            <span className="leading-[22px]">%</span>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div
          className="h-[5px] rounded-full"
          style={{
            backgroundImage: `linear-gradient(to right, ${[
              `#F5D06D 0%`,
              `#F5D06D ${(chart.planned / chartValuesTotal) * 100}%`,
              `#74C991 ${(chart.planned / chartValuesTotal) * 100}%`,
              `#74C991 ${((chart.planned + chart.ongoing) / chartValuesTotal) * 100}%`,
              `#D95350 ${((chart.planned + chart.ongoing) / chartValuesTotal) * 100}%`,
              `#D95350 100%`
            ].join(',')})`
          }}
        ></div>
        <div className="mt-3 flex justify-between">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#F5D06D]"></div>
            <div className="text-tiny text-[#000000]">Planned ({chart.planned})</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#74C991]"></div>
            <div className="text-tiny text-[#000000]">Ongoing ({chart.ongoing})</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#D95350]"></div>
            <div className="text-tiny text-[#000000]">Overdue ({chart.overdue})</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
