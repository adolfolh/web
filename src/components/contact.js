import React, { useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {  
    const [disableSubmit,setDisableSubmit] = useState(true);

    return (
        <div>
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

            <div class="grid col-span-1 md:flex mt-10">
                <section class="p-10 pr-16 md:w-9/12 md:overflow-auto bg-offwhite2">
                    <form 
                        name="Contact Form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        action="/thank-you"
                    >
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div class="grid col-span-1">
                        <div class="pb-3">
                            <label className="font-bold uppercase" htmlFor="email">Email<span className="text-red-600">*</span></label>
                        </div>
                        <input className="p-2" type="email" name="email" id="email-address" placeholder="name@email.com" required/>

                        <div class="pt-10 pb-3">
                            <label className="font-bold uppercase" htmlFor="message">Message</label>
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
                <section className="bg-offwhite3 p-10 w-fill">
                    <ul class="contact">
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
                            <ul class="icons">
                                <li><a target="_blank" rel="noreferrer" href="https://www.twitter.com/adolfoolh" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.github.com/adolfolh" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/adolfo.lh" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adolfo-l%C3%B3pez-herrera-0042a61b5" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Contact;