import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();

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
    <div className="h-full bg-primary/30 py-24 lg:flex xl:flex lg:items-center xl:items-center overflow-y-scroll lg:overflow-hidden md:overflow-hidden xl:overflow-hidden">
      <div className="container mt-10 mx-auto">
        <div className="flex flex-col mx-auto w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t("contact.titleFirst")}{" "}
            <span className="text-accent">{t("contact.titleSecond")}</span>
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
                  placeholder={t("contact.name")}
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder={t("contact.email")}
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder={t("contact.subject")}
                className="input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder={t("contact.message")}
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
                  {t("contact.button")}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
