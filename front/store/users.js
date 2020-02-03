export const state = () => ({
  me: null
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  }
};

export const actions = {
  signUp(context, payload) {
    // 서버에 회원가입 요청을 보내는 부분
    context.commit("setMe", payload);
    console.log(context);
  },
  logIn(context, payload) {
    context.commit("setMe", payload);
    console.log(context);
  },
  logOut(context, payload) {
    context.commit("setMe", null);
    console.log(context);
  }
};
