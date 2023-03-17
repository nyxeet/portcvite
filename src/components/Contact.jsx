import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants"
 
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden h-full`}
    >
      <div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl h-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contacts</h3>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {contacts.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
