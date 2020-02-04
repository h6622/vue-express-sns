export const state = () => ({
  me: null,
  followerList: [],
  followingList: [],
  hasMoreFollower: true,
  hasMoreFollowing: true
});

const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;

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
  },
  loadFollowings(state) {
    const diff = totalFollowings - state.followingList.length;
    const dummyUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000)
      }));
    state.followingList = state.followingList.concat(dummyUsers);
    state.hasMoreFollowing = dummyUsers.length === limit;
  },
  loadFollowers(state) {
    const diff = totalFollowers - state.followerList.length;
    const dummyUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000)
      }));
    state.followerList = state.followerList.concat(dummyUsers);
    state.hasMoreFollower = dummyUsers.length === limit;
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
  },
  loadFollowers({ commit, state }, payload) {
    if (state.hasMoreFollower) {
      commit("loadFollowers");
    }
  },
  loadFollowings({ commit, state }, payload) {
    if (state.hasMoreFollowing) {
      commit("loadFollowings");
    }
  }
};
