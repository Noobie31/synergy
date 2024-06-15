// Home.jsx
import React from 'react';
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import Coursecard from '../components/Coursecard';

const Resources = () => (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Coursecard/>
        
        
        <Footer />
      </div>
    </div>
    
    
  </div>
);

export default Resources;
