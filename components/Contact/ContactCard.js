"use client";
import styles from "./Common.module.css";

import { MdEmail, MdCall, MdWhatsapp } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

        {/* ---------MdWhatsapp----------- */}
        <div className={styles.grid_card}>
            <i>
              {" "}
              <MdWhatsapp style={{justifySelf:'center'}}/>{" "}
            </i>
            <h2>Whatsapp Chat</h2>
            <p>Weekdays: 9 AM — 5 PM IST</p>
            <p className={styles.last_para}>Weekends: 9 AM — 5 PM IST </p>
            <Link
              style={{color:'blue'}}
              href="//api.whatsapp.com/send?phone=918712219195 &text=Hi"
            >
              {" "}
              Chat Now <span>--&gt;</span>
            </Link>
          </div>

        {/* ------call------- */}
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdCall style={{justifySelf:'center'}}/>{" "}
            </i>
            <h2>Phone Call</h2>
            <p>Any Working hours</p>
            <p className={styles.last_para}>response time: If available </p>
            <Link 
                style={{color:'blue'}}
                href="/" className={styles.anchorLink}>
              {" "}
              Call Now <span>--&gt;</span>
            </Link>
          </div>
        
        {/* ---------MdEmail----------- */}
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdEmail style={{justifySelf:'center'}}/>
              {" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 12 - 24 hours </p>
            <Link 
                style={{color:'blue'}}
                href="mailto:max.support@sehatdiets.com?body=My custom mail body">
              {" "}
              Send Email <span>--&gt;</span>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ContactCard;