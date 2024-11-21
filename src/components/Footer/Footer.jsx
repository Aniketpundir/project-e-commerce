import React from "react";
import FooterLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { LiaCarAltSolid } from "react-icons/lia";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/toprated",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/men",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronics",
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "Terms & Conditions",
    link: "/termsconditions",
  },
];

const Footer = () => {
  return (
    <>
      <div style={bannerImg} className="text-white">
        <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-40">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
                Shopsy
              </h1>
              <p>
                Lorem ipsum dolo sit amet components adipisicing elit. Cum in
                beatae ea recusandae blanditiis veritatis.
              </p>
            </div>
            {/* footerLinks details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.id}
                      >
                        <NavLink to={link.link}>
                          <span>{link.title}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* social link  */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Top Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {Menu.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.id}
                      >
                        <NavLink to={link.link}>
                          <span>{link.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 1234567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
