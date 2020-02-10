<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field v-model="email" label="이메일" type="email" :rules="emailRules" required />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox v-model="terms" label="동의?" :rules="termsRules" required />
            <v-btn color="green" type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nuxt.js",
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "이메일을 입력해주세요.",
        v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다."
      ],
      password: "",
      passwordRules: [v => !!v || "비밀번호를 입력해주세요."],
      passwordCheck: "",
      passwordCheckRules: [
        v => !!v || "비밀번호 확인을 입력해주세요.",
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ],
      nickname: "",
      nicknameRules: [v => !!v || "닉네임을 입력해주세요."],
      terms: false,
      termsRules: [v => !!v || "약관에 동의 하셔야 합니다."]
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  watch: {
    me(value) {
      if (value) {
        this.$router.push({
          path: "/"
        });
      }
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("users/signUp", {
            email: this.email,
            nickname: this.nickname,
            password: this.password
          })
          .then(() => {
            this.$router.push({
              path: "/"
            });
          })
          .catch(() => {
            alert("회원가입 실패");
          });
      } else {
        alert("폼이 유효하지 않습니다.");
      }
      console.log(this.valid);
    }
  },
  head() {
    return {
      title: "회원가입"
    };
  },
  middleware: "anonymous"
};
</script>

<style></style>
