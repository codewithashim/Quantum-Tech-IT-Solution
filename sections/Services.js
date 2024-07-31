import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title mb-10">
            <TitleSm title="SERVICES" /> <br />
            <br />
            <Title
              title="Unique technologies & modern approach"
              className="title-bg"
            />
          </div>
          <div className="grid-2 lg:max-w-screen-xl lg:mx-auto">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} height="h-96"/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services
