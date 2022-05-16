import React, { useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {  
    const [disableSubmit,setDisableSubmit] = useState(true);

    return (
        <div className="">
            <div className="p-10 mt-16">
                <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Get in touch.</h2>
                <div className="md:px-10 p-0 md:flex">
                    <p className="text-justify leading-loose text-sm md:text-xl">
                        If you are interested in working with me you can send me an 
                        email using the form below or reach out to me through my 
                        social media accounts.
                    </p>
                </div>
            </div>

            <div className="grid col-span-1 md:flex mt-10">
                <section className="p-10 md:pr-16 md:w-9/12 w-full md:overflow-auto bg-offwhite3">
                    <form 
                        name="Contact Form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        action="/thank-you"
                    >
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div className="grid col-span-1">
                        <div className="pb-3">
                            <label className="font-bold uppercase font-accent" htmlFor="email">Email<span className="text-red-600">*</span></label>
                        </div>
                        <input className="p-2" type="email" name="email" id="email-address" placeholder="name@email.com" required/>

                        <div className="pt-10 pb-3">
                            <label className="font-bold uppercase font-accent" htmlFor="message">Message</label>
                        </div>
                        <textarea className="p-2 mb-8" name="message" id="message" rows="5" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."></textarea>

                    </div>
                    <ul>
                        <li>
                            <ReCAPTCHA 
                                sitekey="6LfKu98fAAAAAFiQgf6MgyyokJNIbkhzk62-AKV4" 
                                size="normal"
                                id="recaptcha-google"
                                onChange={useCallback(() => {setDisableSubmit(false)}, [],)}
                            />
                            <button 
                                type="submit" 
                                value="Contact Form Submission" 
                                disabled={disableSubmit}
                                className="button text-center w-full mt-8 "
                            >
                                Send Message
                            </button>
                        </li>
                    </ul>
                    </form>
                </section>

                {/** SOCIALS AND MORE DETAILS */}
                <section className="bg-offwhite2 p-10 w-full md:w-3/12">
                    <ul className="contact">
                        <li className="mb-10">
                            <h3>Location</h3>
                            <span>London,<br />
                            UK<br />
                            </span>
                        </li>
                        <li className="mb-10">
                            <h3>Email</h3>
                            <a href="mailto:adolfolh@outlook.com">adolfolh@outlook.com</a>
                        </li>
                        <li className="mb-10">
                            <h3>Social</h3>
                            <ul className="flex">
                                <li><a className="pr-2 h-2 w-2" target="_blank" rel="noreferrer" href="https://www.twitter.com/adolfoolh"><span className="label"><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                                <li><a className="pr-2 h-2 w-2" target="_blank" rel="noreferrer" href="https://www.github.com/adolfolh"><span className="label"><FontAwesomeIcon icon={faGithub} /></span></a></li>
                                <li><a className="pr-2 h-2 w-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/adolfo.lh" ><span className="label"><FontAwesomeIcon icon={faInstagram} /></span></a></li>
                                <li><a className="pr-2 h-2 w-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adolfo-l%C3%B3pez-herrera-0042a61b5"><span className="label"><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Contact;