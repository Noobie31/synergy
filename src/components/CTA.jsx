import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Chat with us, now!</h2>
      <div className="flex">
        <input type="text" placeholder="Your Name" style={{ width: '300px', backgroundColor: 'black', borderRadius: '10px', color: 'white' }} className={`${styles.textField} pl-2`} />
        <input type="text" placeholder="Enter your email" style={{ width: '300px', marginLeft: '10px', backgroundColor: 'black', borderRadius: '10px', color: 'white' }} className={`${styles.textField} pl-2`} />
      </div>
      <textarea placeholder="Your Query" style={{ width: '620px', height: '80px', marginTop: '10px', padding: '10px', backgroundColor: 'black', borderRadius: '10px', color: 'white' }} className={`${styles.textField} pl-2`} />
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);







export default CTA;
