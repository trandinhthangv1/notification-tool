import schedule from 'node-schedule';
import main from './main.js';

const date = new Date(2023, 5, 20, 22, 37, 10); // 01:02:03 04/05/2030

const job = schedule.scheduleJob(date, () => {
  main();
});
