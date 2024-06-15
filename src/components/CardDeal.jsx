import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button1";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Online Courses <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[4700px] mt-5`}>
      Synergy Sidharth IAS Academy extends its educational reach with comprehensive online classes, ensuring accessibility for all aspiring civil servants. Geographical barriers are no longer a hindrance as students can access live lectures, interactive sessions, and study materials from anywhere. Our online platform offers flexibility, allowing students to customize their learning schedules. Dedicated educators provide support, guidance, and clarification, ensuring no student is left behind. With our online classes, we embody inclusivity and excellence, empowering every aspirant to pursue their dreams of serving the nation, regardless of their circumstances.
        
      </p>

      <Button styles={`mt-10`} />
    </div>

    
  </section>
);

export default CardDeal;
