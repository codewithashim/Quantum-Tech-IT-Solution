import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="grid-4 lg:max-w-screen-xl lg:mx-auto">
            <div className="logo">
              <TitleLogo title="QUANTUMTECH" caption="" className="logobg" />
              <br />
              <span>Questions ? Reach us</span>
              <br />
              <br />
              <h3 className="">
                <a href="tel:+917982082271">+91 79820 82271</a>
              </h3>
              <h3 className="-mt-4">
                <a href="tel:+917982082271">+91 8890923521</a>
              </h3>
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About agency</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>
              <li>
                <Link href="/showcase">Project</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="/showcase">Design system</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/services">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/services">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services">E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect lg:max-w-screen-xl lg:mx-auto mt-5 mb-10">
            <div className="text">
              <span>© 2024 QuantumTech Development.</span>
            </div>
            <div className="connect">
              <span>QUANTUMTECH COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
