import { faker } from '@faker-js/faker';
import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { getUnixTime } from 'date-fns';
import type { Project } from '../src/models';

export default defineFakeRoute([
  {
    url: '/fake/projects',
    response: () =>
      faker.helpers.multiple(
        (): Project => {
          const startDate = faker.date.past();
          const latestUpdate = faker.date.future({ refDate: startDate });
          const deadline = faker.date.future({ refDate: latestUpdate });

          return {
            name: faker.company.name(),
            description: faker.lorem.paragraph({ min: 1, max: 3 }),
            members: {
              projectManager: {
                avatar: faker.image.personPortrait({ size: 64 }),
                url: faker.internet.url(),
                fullName: faker.person.fullName(),
                position: faker.person.jobType()
              },
              other: faker.helpers.multiple(
                () => ({
                  avatar: faker.image.personPortrait({ size: 64 }),
                  url: faker.internet.url(),
                  fullName: faker.person.fullName()
                }),
                { count: { min: 1, max: 5 } }
              )
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
                url: faker.internet.url(),
                name: faker.lorem.sentence({ min: 1, max: 4 }),
                assignee: {
                  avatar: faker.image.personPortrait({ size: 64 }),
                  url: faker.internet.url(),
                  fullName: faker.person.fullName()
                },
                deadline: getUnixTime(faker.date.between({ from: startDate, to: deadline }))
              }),
              { count: { min: 1, max: 3 } }
            ),
            lastComment: {
              comment: faker.lorem.text(),
              time: getUnixTime(faker.date.future({ refDate: startDate })),
              author: {
                avatar: faker.image.personPortrait({ size: 64 }),
                url: faker.internet.url(),
                fullName: faker.person.fullName()
              }
            }
          };
        },
        { count: 4 }
      )
  }
]);
