import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

interface ContactFormProps extends React.HTMLProps<HTMLFormElement> {
  netlify?: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
    event.preventDefault();
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <div>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="subject"
                className="input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="message"
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
