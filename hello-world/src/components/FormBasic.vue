<template>
  <form action="" @submit.prevent="handleSubmit">
    <label for="">Email</label>
    <input type="email" required v-model="email" />

    <label for="">Pass</label>
    <input type="password" required v-model="password" />

    <label for="">Role</label>
    <select v-model="role">
      <option value="dev">web dev</option>
      <option value="des">web des</option>
    </select>

    <label for="">skills</label>
    <input type="text" v-model="termSkill" @keyup.alt="addSkills" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="term">
      <input type="checkbox" v-model="term" required />
      <label for="">accept term and condition</label>
    </div>
    <div class="submit">
      <button type="submit">Submit</button>
    </div>
    <!-- <div>
      <input type="checkbox" value="test1" v-model="test" />
      <label for="">test 1</label>
    </div>
    <div>
      <input type="checkbox" value="test2" v-model="test" />
      <label for="">test 2</label>
    </div>
    <div>
      <input type="checkbox" value="test3" v-model="test" />
      <label for="">test 3</label>
    </div> -->
  </form>
  <p>email: {{ email }}</p>
  <p>password: {{ password }}</p>
  <p>role: {{ role }}</p>
  <p>term accepted: {{ term }}</p>
  <!-- <p>test: {{ test }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      term: false,
      termSkill: "",
      skills: [],
      // test: [],
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "," && this.termSkill) {
        if (!this.skills.includes(this.termSkill)) {
          this.skills.push(this.termSkill);
        }
        this.termSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      console.log("submmitted");
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: blue;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>