import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              {" "}
              We specialize in web development, app development, digital
              marketing, and branding & creative services. Our team is dedicated
              to providing top-notch solutions tailored to your needs.
            </p>
          </div>
          <div className="hero-content grid-4 w-full mx-auto lg:max-w-screen-xl">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise
