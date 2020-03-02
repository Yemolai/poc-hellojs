import hello from 'hellojs';

// "async" is optional
export default async ({ Vue }) => {
  hello.init({
    facebook: '2670289309692566',
  });
  Vue.prototype.$hello = hello;
};
