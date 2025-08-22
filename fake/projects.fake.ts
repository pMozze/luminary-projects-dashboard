import { faker } from '@faker-js/faker';
import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { getUnixTime } from 'date-fns';
import type { Project } from '../src/models';

export default defineFakeRoute([
  {
    url: '/fake/projects',
    response: () => {
      const projects: Project[] = [];
      const projectsAmount = faker.number.int({ min: 1, max: 4 });

      for (let projectIndex = 0; projectIndex < projectsAmount; projectIndex++) {
        const startDate = faker.date.past();
        const latestUpdate = faker.date.future({ refDate: startDate });
        const deadline = faker.date.future({ refDate: latestUpdate });

        projects.push({
          name: faker.company.name(),
          description: faker.lorem.paragraph({ min: 1, max: 3 }),
          members: {
            projectManager: {
              avatar: faker.image.personPortrait({ size: 64 }),
              fullName: faker.person.fullName(),
              position: faker.person.jobType()
            },
            teamAvatars: faker.helpers.multiple(() => faker.image.personPortrait(), { count: { min: 1, max: 5 } })
          },
          perfomance: {
            start: getUnixTime(startDate),
            latestUpdate: getUnixTime(latestUpdate),
            deadline: getUnixTime(deadline),
            progress: faker.number.int({ min: 0, max: 100 }),
            chart: {
              planned: faker.number.int({ min: 0, max: 3 }),
              ongoing: faker.number.int({ min: 0, max: 3 }),
              overdue: faker.number.int({ min: 0, max: 3 })
            }
          },
          tasks: faker.helpers.multiple(
            () => ({
              name: faker.lorem.sentence({ min: 1, max: 4 }),
              assigneeAvatar: faker.image.personPortrait({ size: 32 }),
              deadline: getUnixTime(faker.date.between({ from: startDate, to: deadline }))
            }),
            { count: { min: 1, max: 3 } }
          )
        });
      }

      return projects;
    }
  }
]);
