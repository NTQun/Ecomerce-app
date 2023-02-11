import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillHome, AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />

      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row set-padding ">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43183.826287919204!2d105.76378288224923!3d10.034000180764156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1675760774658!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4"> Contact </h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comment"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4"> Get In Touch With Us </h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiFillHome className="fs-5" />
                      <address className="mb-0">
                        Hno:3/2, Xuan Khanh, Ninh Kieu, Can Tho
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiFillPhone className="fs-5" />
                      <a href="tel:+83 345384130">+83 345384130</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotoneMail className="fs-5" />
                      <a href="mailto:quanb1910130@student.ctu.edu.vn">
                        mailto:quanb1910130@student.ctu.edu.vn
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaInfo className="fs-5" />
                      <p> Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
