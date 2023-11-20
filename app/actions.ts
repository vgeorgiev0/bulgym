"use server";

import { FormFields } from "@/components/Contact";

export const handleFormSubmit = async (data: FormFields) => {
  console.log({
    name: data.name,
    email: data.email,
    message: data.message,
    phone: data.phone,
    subject: data.subject,
  });
};
