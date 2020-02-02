<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader> 회원가입</v-subheader>
          <v-form>
            <v-text-field label="이메일" type="email" required />
            <v-text-field label="비밀번호" type="password" required />
            <v-text-field label="비밀번호확인" type="password" required />
            <v-text-field label="닉네임" type="nickname" required />
            <v-checkbox required label="동의?" /><v-btn color="green"
              >가입하기</v-btn
            >
          </v-form>
        </v-container></v-card
      ></v-container
    >
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "회원가입"
    };
  },
  data() {
    return {
      name: "Nuxt.js"
    };
  }
};
</script>

<style></style>
