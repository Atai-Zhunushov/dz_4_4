import React  from "react";
import styles from './validation.module.css'

export default class ValidationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            numbers: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})

    }
    handleSubmit(e) {
        console.log('Your FullName:', this.state.fullName);
        console.log('Your Numbers:', this.state.numbers);
        console.log('Your Email:', this.state.email);
        e.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className={styles.validationForm}>
                <label>
                    FullName:
                    <input name="fullName" type="text" onChange={this.handleChange} placeholder='Your FullName:' className={styles.input}/>
                </label>
                <label>
                    Numbers:
                    <input name="numbers" type="tel" onChange={this.handleChange} placeholder='Your Numbers: 'className={styles.input}/>
                </label>
                <label style={{marginLeft:25}}>
                    Email:
                    <input name="email" type="email" onChange={this.handleChange} placeholder='Your email:' className={styles.input}/>
                </label>
                <input type="submit" value='Send' className={`${styles.validationBtn} ${styles.validationBtn2}`}/>

            </form>
        )
    }


}