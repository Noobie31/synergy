import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button1";

const FeatureCard = ({ icon, title, content }) => (
  <a href="https://syndergyias.com/courses" className="flex flex-col p-6 rounded-lg mb-6 feature-card" style={{ width: '400px', minHeight: '400px' }}>
    <div className="w-full h-[200px] rounded-t-lg bg-gray-700 flex items-center justify-center">
      <img src={icon} alt="Feature Icon" className="w-[80px] h-[80px] object-contain" />
    </div>
    <div className="flex-1 flex flex-col justify-center items-center bg-gray-800 rounded-b-lg">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mt-4 mb-2 text-center text-gray-100">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimGray text-[16px] leading-[24px] px-4 text-center text-gray-200">
        {content}
      </p>
    </div>
  </a>
);

const Coursecard = () => (
  <section id="courses" className={layout.flexcentre}>
    <div className={`${layout.sectionInfo} py-6 px-10`}>
      <h2 className={`${styles.heading2} text-gray-100`}>
        Courses Offered
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-200`}>
        {/* Your paragraph content here */}
      </p>
    </div>

    <div className={`${layout.sectionImg} grid grid-cols-4 gap-10 md:gap-6`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Coursecard;
