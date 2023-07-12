<template>
  <div class="body">
    <br />
    <h1 class="header">1 A 2 B</h1>
    <p class="color">Enter four different numbers:</p>
    <div class="formDiv">
      <form>
        <input
          type="text"
          id="guess"
          name="guess"
          maxlength="4"
          placeholder="Ex:1234"
        />
        <button type="reset" id="confirm" @click="guessButton">Enter</button>
        <button type="reset" @click="resetButton">Restart</button>
        <!-- <button type="reset" @click="answerButton">Answer</button> -->
      </form>
    </div>

    <div id="main" class="color"></div>
  </div>
</template>

<script>
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const answer = [];
for (let i = 0; i < 4; i++) {
  let num = Math.floor(Math.random() * array.length);
  answer.push(array[num]);
  array.splice(num, 1);
}
let times = 0;
export default {
  methods: {
    guessButton() {
      const guessNumber = document.getElementById("guess").value;
      const distinct = new Set(Array.from(guessNumber));
      const distinctToArray = [...distinct];

      if (isNaN(parseFloat(guessNumber))) {
        alert("請輸入數字");
        return;
      }
      if (distinctToArray.length != 4) {
        alert("請輸入四個不同的數字");
        return;
      }
      let a = 0;
      let b = 0;

      for (let i = 0; i < 4; i++) {
        var index = answer.indexOf(Array.from(guessNumber)[i]);
        if (index != -1) {
          if (index == i) {
            a++;
          } else {
            b++;
          }
        }
      }
      if (a == 4) {
        times++;
        alert(`
        恭喜答對!!
        總共猜了${times}次`);
        history.go(0);
      } else {
        let main = document.getElementById("main");
        main.innerHTML += `${guessNumber}  ${a}A${b}B<br>`;
      }
      times++;
    },
    answerButton() {
      alert(answer.join(""));
    },
    resetButton() {
      history.go(0);
    },
  },
};
</script>

<style scoped>
.body {
  background-color: aliceblue;
  text-align: center;
  min-height: 50vh;
}
.header {
  color: #ffbf00;
  border-style: double;
  border-color: #4b0080;
  font-family: Comic Sans MS;
  text-shadow: 3px 3px #6495ed, -2px -2px #6495ed, 2px -2px #6495ed,
    -2px 2px #6495ed;
}
.color {
  color: #24367d;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
input {
  border-radius: 6px;
  border-color: #888;
}
button {
  margin: 1px;
  border: none;
  color: #3c3c3c;
  border-radius: 6px;
}
button:hover {
  background-color: #d0d0d0;
}
</style>
