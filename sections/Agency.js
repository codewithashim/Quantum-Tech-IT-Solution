import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const AnimatedNumber = ({ end }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? <CountUp end={end} duration={2} /> : '0+'}
    </div>
  );
};

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1 lg:max-w-screen-xl lg:mx-auto">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products." />
              <p className="desc-p">
                As a leading development agency, we specialize in transforming
                your business concepts into innovative and high-performing
                digital products. Our team of experts employs cutting-edge
                technologies and industry best practices to deliver solutions
                that drive success and growth. Join us on a journey of digital
                excellence and let’s create something extraordinary together.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo flex">
                    <AnimatedNumber end={4} />+
                  </h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo flex lg:max-w-screen-xl lg:mx-auto">
                    <AnimatedNumber end={100} />+
                  </h1>
                  <h3>Successful Projects</h3>
                </div>
                <div className="box">
                  <h1 className="indigo flex">
                    <AnimatedNumber end={12} />+
                  </h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex lg:max-w-screen-xl lg:mx-auto">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                At QuantumTech, our mission is to empower businesses with
                innovative digital solutions. We push the boundaries of
                technology to create cutting-edge products that enhance user
                experiences and drive growth. We maintain the highest standards
                of quality, ensuring robust and reliable solutions tailored to
                our clients' needs. Through strong, transparent relationships,
                we collaborate closely with clients to achieve their goals. We
                invest in our team's continuous development to stay ahead of
                industry trends and promote sustainable practices in our
                operations. Join us to transform your business ideas into smart
                digital products for a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Agency;
