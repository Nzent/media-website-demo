"use client";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    alert(data);
  };

  return (
    <section className="container mx-auto h-screen mt-20 flex justify-center">
      <div className="flex justify-between items-center gap-x-4 h-full w-full max-w-6xl">
        {/* left */}
        <div className="basis-1/2">
          <Image
            src={"/images/contact.jpg"}
            width={600}
            height={1920}
            alt="contact us"
            className="object-cover rounded-md shadow-lg"
          />
        </div>
        {/* right */}
        <div className="basis-full bg-white p-4 rounded-md">
          <div className="text-subheading font-semibold">Contact Us</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-body flex flex-col gap-y-2 mt-4"
          >
            {/* name */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="John"
                className={`outline-none border-2 border-slate-900/50 ${
                  errors.name && "border-red-500"
                } p-2 rounded-md w-full`}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@mail.com"
                className={`outline-none border-2 border-slate-900/50 ${
                  errors.email && "border-red-500"
                } p-2 rounded-md w-full`}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* subject */}
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Request"
                className={`outline-none border-2 border-slate-900/50 ${
                  errors.subject && "border-red-500"
                } p-2 rounded-md w-full`}
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            {/* message */}
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Compose ..."
                className={`outline-none border-2 border-slate-900/50 ${
                  errors.message && "border-red-500"
                } p-2 rounded-md w-full`}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            {/* submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="outline-none bg-slate-900 text-white text-body font-semibold px-4 py-2 rounded-md"
              >
                Let&apos;s discuss
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
