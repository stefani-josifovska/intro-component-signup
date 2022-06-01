import classes from './ClaimFreeTrialBtn.module.css';

const ClaimFreeTrialBtn = (props) => {
    const onClaimFree = e => {
        e.preventDefault();
        props.buttonClicked();
    }

    return <button type='submit' className={classes['free-trial-button']} onClick={onClaimFree}>CLAIM YOUR FREE TRIAL</button>
}

export default ClaimFreeTrialBtn;