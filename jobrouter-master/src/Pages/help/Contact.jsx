import styles from './help styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact_layout}>
        <h3 className={styles.contactUs_title}>Contact Us</h3>
        <form>
            <label>
                <span>Your Email</span><br/>
                <input type="email" name="email" required /><br/>
            </label><br/>
            <label>
                <span>Your message : </span><br/>
                <textarea rows="6" cols="31" name="message" required></textarea><br/>
            </label><br/>
            <button className={styles.submit_button}>
                Submit
            </button>
        </form>   
        
    </div>
  )
}

export default Contact
