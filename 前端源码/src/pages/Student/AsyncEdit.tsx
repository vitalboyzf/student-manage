import { dynamic } from 'umi';
export default dynamic({
  loader: async function () {
    // webpackChunkName tells webpack create separate bundle for HugeA
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './AsyncEdit');
    return HugeA;
  },
});