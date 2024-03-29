import http from 'k6/http';
import { sleep, check } from 'k6';
import productTest from './products.js';
import singleprodTest from './singleprod.js';
import styleTest from './styles.js';
import relatedTest from './related.js';

export let options = {
  scenarios: {
    open_model: {
      executor: 'constant-arrival-rate',
      rate: 5000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 115,
      maxVUs: 115
    },
  }
};

export default function () {
  productTest();
  // singleprodTest();
  // styleTest();
  // relatedTest();
};

// command: k6 run stress_test/start.js


