import checkmark from "../assets/icon-list.svg"
import iconSuccess from "../assets/icon-success.svg"
import desktopIllustration from "../assets/illustration-sign-up-desktop.svg"
import mobileIllustration from "../assets/illustration-sign-up-mobile.svg"
import {useState} from "react";
export default function Card() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [error, setError] = useState("")
    const [errorClass, setErrorClass] = useState("")

    function click(e) {
        e.preventDefault()
        if(email && !error) {
            setIsSubscribed(true)
            setErrorClass("")
        } else if (!email) {
            setError("Valid email required");
            setErrorClass("input-error");
        }
    }

    function emailValidation() {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!emailRegex.test(email)) {
            setError("Valid email required");
            setErrorClass("input-error");
        } else {
            setError("")
            setErrorClass("")
        }
    }

    if(isSubscribed) {
        return (
            <div className="thankyou-card">
                <div className="success-icon"><img className="list-icon" src={iconSuccess}/></div>
                <div className="title">Thanks for subscribing!</div>
                <div className="description">A confirmation email has been sent to <span className="email">{email}</span>. Please open it and click the button inside to confirm your subscription.</div>
                <button className="button">Dismiss message</button>
            </div>
        )

    } else {
        return (
            <div className="card">
                <div className="right">
                    <div className="title">Stay updated!</div>
                    <div className="description">Join 60,000+ product managers receiving monthly updates on:</div>
                    <div className="list">
                        <CheckMarkDesc text="Product discovery and building what matters"/>
                        <CheckMarkDesc text="Measuring to ensure updates are a success"/>
                        <CheckMarkDesc text="And much more!"/>
                    </div>
                    <div className="email-form">
                        <div className="emailtext">
                            <div className="form-text">Email address</div>
                            <div className="error">{error}</div>
                        </div>

                        <form className="form">
                            <label>
                                <input
                                    className={`input ${errorClass}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={emailValidation}
                                    type="email"
                                    name="email"
                                    placeholder="email@company.com"
                                    autoComplete="email"
                                />
                            </label>
                        </form>
                        <button onClick={click} className="button">Subscribe to a monthly newsletter</button>
                    </div>

                </div>
                <div className="left">
                    <picture>
                        <source  srcSet={mobileIllustration} media="(max-width: 1000px)" />
                        <img className="mobile-illustration" src={desktopIllustration} alt="illustration" />
                    </picture>
                </div>
            </div>
        )
    }
}

function CheckMarkDesc({text}) {
    return(
        <div className="list-row">
            <img className="list-icon" src={checkmark}/>
            <div className="list-description">{text}</div>
        </div>
    )
}