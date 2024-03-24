import { useState } from "react";

import sendMessage from "@/api";

import { Toast } from "@/utils/toast";

import contactSchema from "@/utils/validations/contactSchema";

import styles from "./contact.module.scss";

import UiForm from "@/components/ui/UiForm";
import UiInput from "@/components/ui/UiInput";
import UiTextArea from "@/components/ui/UiTextArea";
import UiButton from "@/components/ui/UiButton";
import UiIcon from "@/components/ui/UiIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);

    sendMessage(formData)
      .then(() => {
        setLoading(false);

        Toast.success({
          msg: "Your message has been recorded, we will get to you shortly",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function handleChange(event: { name: string; value: string | null }) {
    setFormData((data) => ({
      ...data,
      [event.name]: event.value,
    }));
  }

  return (
    <div className={styles.contact_us}>
      <UiForm schema={contactSchema} formData={formData} onSubmit={onSubmit}>
        {({ errors }) => (
          <div className={styles.contact_us__inner}>
            <h1>Contact us</h1>
            <UiInput
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              label="Name*"
            />
            <UiInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              label="Email Address*"
            />
            <UiInput
              name="phone"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              label="Phone*"
            />
            <UiInput
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              label="Company Name"
            />
            <UiTextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              label="Message*"
              error={errors.message}
            />
            <UiButton loading={loading}>
              Send message
              <UiIcon icon="ArrowRight" />
            </UiButton>
          </div>
        )}
      </UiForm>
    </div>
  );
}
