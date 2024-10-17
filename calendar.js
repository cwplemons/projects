@font-face {
  font-family: "neue";
  src: url("neue.ttf");
}

@keyframes rotate {
  from {transform:rotate(0deg);opacity:0}
  25% {transform: rotate(180deg)}
  50% {transform: rotate(360deg);opacity:1}
  75% {transform: rotate(540deg)}
  to {transform: rotate(719deg);opacity:0}
}

@keyframes pulse {
  from {opacity: 0}
  50% {opacity: 1}
  to {opacity: 0}
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-family: "neue";
  font-weight: bolder;
}

body {
  background: rgb(32, 32, 32);
  color: white;
  font-size: 1.5rem;
}

.calendar {
  display: grid;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 4/3;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto 1fr 1fr 1fr 1fr 1fr;
  border: 2px solid white;
  border-radius: 1rem;
  margin: .5rem 0;
}

.calendar-top {
  text-align: center;
  padding-bottom: .5rem;
}

.calendar-day {
  text-align: right;
  background: white;
  border: 2px solid rgb(32, 32, 32);
  color: rgb(32, 32, 32);
  padding-top: 8px;
  padding-right: 8px;
  border-radius: .75rem;
  font-size: 1.1rem;
  height: 3rem;
  transition: scale 100ms;
}

.calendar-day.empty {
  background: transparent;
}

.calendar-day:not(.empty):active {
  scale: 1.5;
}

.month-name {
  grid-column: 1/-1;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
}

.calendar-day.today {
  background: rgb(255, 224, 0);
}

.load-screen {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: opacity 150ms;
  color: white;
  font-size: 4rem;
}

.circle-box {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 30%;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
}

.circle {
  width: 100%;
  aspect-ratio: 1/1;
  border: 1rem solid white;
  border-color: white transparent transparent transparent;
  border-radius: 100%;
  filter: drop-shadow(0 0 8px white);
  animation: 2s rotate linear infinite;
}

.load-screen p {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 8px white;
}

.send-screen {
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
}

.send-screen svg {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  fill: white;
  width: 8rem;
  filter: drop-shadow(0 0 8px white);
  animation: 1.5s pulse linear infinite;
}