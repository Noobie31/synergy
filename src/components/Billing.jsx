import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
  <div className="aspect-w-3 aspect-h-4 relative z-[5] w-[60%]">
    <img src={bill} alt="billing" className="w-full h-full object-cover" />
  </div>

  {/* gradient start */}
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
  <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  {/* gradient end */}
</div>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Founder 
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      Our founder O P Siddharth, basically a civil servant and a civil services aspirant appeared to UPSC Interview between 2002-2006. A passionate teacher , who desired to share his knowledge and Experience started Synergy Study Circle in 2003, which eventually evolved into a full-fledged Synergy Siddharth IAS Academy. With his vast knowledge he encompassed all the areas in General Studies. He is passionate about teaching History, Geography and Current Affairs. He is exceptionally strong in Test discussions, in which he gives a complete understanding of specific topic from the stone Age to Modern age in dimensions which makes him  unique among the Civil Services Trainers. Some of the best results which got the limelight of Tamilnadu media are his students 
      </p>

      
    </div>
  </section>
);

export default Billing;
