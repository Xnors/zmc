import { createSignal } from "solid-js";
import "./styles/App.scss";

function App() {
  const [qqNumber, setQQNumber] = createSignal();
  function showQQNmber() {
    let qn = "3791794423";
    let iter = 0;

    // 打字机效果
    let timer = setInterval(() => {
      console.log("开始打字");
      setQQNumber(qn.slice(0, iter));
      iter++;
      if (iter >= qn.length + 1) {
        clearInterval(timer);
      }
    }, 30);
  }
  return (
    <>
      <div className="set-center">
        <div className="welcome-text">
          <div className="small-welcome">嘿，这里是</div>
          <div className="big-welcome">张某赐呦!</div>
        </div>
        <div className="links">
          <a href="#">关注我</a>
          <div className="split-line"></div>
          <div
            className="qq-number"
            onClick={() => {
              showQQNmber();
            }}
          >
            QQ
          </div>
          <div className="split-line"></div>
          <a href="#">提建议</a>
        </div>
        <div className="qq-number-show-box">{qqNumber}</div>
      </div>
    </>
  );
}

export default App;
