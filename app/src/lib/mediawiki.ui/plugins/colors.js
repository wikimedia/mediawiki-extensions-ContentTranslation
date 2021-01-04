import colors from "../variables/colors.less";

const install = function(Vue) {
  const currentVue = new Vue();
  Vue.mixin({
    computed: {
      $mwui: () => ({ ...(currentVue.$mwui || {}), colors })
    }
  });
};

export default { install };
