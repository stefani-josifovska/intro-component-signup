import classes from "./App.module.css";
import IntroText from "./Components/IntroText";
import TryFreeButton from "./Components/TryFreeBtn";
import FormBody from "./Components/Form/FormBody";

function App() {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["intro-text"]}>
        <IntroText />
      </div>
      <div className={classes["form"]}>
        <TryFreeButton />
        <FormBody />
      </div>
    </div>
  );
}

export default App;
