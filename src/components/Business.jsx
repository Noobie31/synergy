import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button1";

const FeatureCard = ({ icon, title, content, index }) => (
  <a href="https://syndergyias.com/courses" className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} style={{ minWidth: '600px' }}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      <div className="absolute z-[0] w-[40%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 " />
      
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </a>
);

const Business = () =>  (
  <section id="courses" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Start Your Voyage, <br className="sm:block hidden" /> We'll Be Your Compass.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Discover the course that resonates with your goals and aspirations, where knowledge becomes your greatest asset. But with a multitude of choices awaiting your selection.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
