import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className="lg:max-w-screen-xl mx-auto ">
        <div className=" ">
          <div className="text-center pb-10">
            <Title title="Selected Projects" />
          </div>
          <div className="hero-content grid-3 ">
            {showcase.map((item) => (
              <Card data={item} key={item.id} path={item.path} />
            ))}
          </div>
          <div className="card links">
            <Link href="/showcase">
              VIEW ALL PROJECTS <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowCase
