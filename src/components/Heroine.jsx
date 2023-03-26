import React from "react";
import bg from "../assets/bg-2.png";
import styles from "../style";

const Heroine = () => {
  return (
    <section
      id="home2"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={bg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-5`}
      >
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Develop Healthy<br></br> Eating <br />
          <span className="text-gradient">Habits</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-0`}>
          Say goodbye to tedious calorie tracking and hello to a fun and
          engaging way to monitor your diet. Start your journey to better health
          today.
        </p>
      </div>
    </section>
  );
};

export default Heroine;
