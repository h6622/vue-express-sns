export const state = () => ({
  me: null,
  followerList: [
    { id: 1, nickname: "h662" },
    { id: 2, nickname: "성현" },
    { id: 3, nickname: "???" }
  ],
  followingList: [
    { id: 1, nickname: "h662" },
    { id: 2, nickname: "성현" },
    { id: 3, nickname: "???" }
  ],
  hasMoreFollower: true,
  hasMoreFollowing: true
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  addFollower(state, payload) {
    state.followerList.push(payload);
  },
  removeFollower(state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followerList.splice(index, 1);
  },
  addFollowing(state, payload) {
    state.followingList.push(payload);
  },
  removeFollowing(state, payload) {
    const index = state.followingList.findIndex(v => v.id === payload.id);
    state.followingList.splice(index, 1);
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
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  },
  addFollowing({ commit }, payload) {
    // 비동기 요청
    commit("addFollowing", payload);
  },
  removeFollowing({ commit }, payload) {
    commit("removeFollowing", payload);
  }
};
