import classes from "./TryFreeButton.module.css";

const TryFreeButton = () => {
  return (
    <div className={classes["try-free-btn"]}>
      <p><span>Try it free 7 days </span> then $20/mo. thereafter</p>
    </div>
  );
};

export default TryFreeButton;
