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
  // validate form with useform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // handle form submision with useform
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    alert(data);
  };

  return (
    <section className="container mx-auto h-full py-10 mt-20 max-md:p-4 overflow-hidden">
      {/* top title section */}
      <div className=" text-center w-full flex flex-col my-10 relative">
        <div className="text-heading font-bold self-start w-full text-center max-md:text-subheading">
          Contact us
        </div>
        <div className="text-center text-subheading">
          Start the conversation to established good relationship and business.
        </div>
        {/* 3 background bubbles */}
        <div className="absolute top-2 left-[50rem] bg-red-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[40rem] bg-blue-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[30rem] bg-green-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
      </div>

      {/* form grid section */}
      <div className="flex flex-col w-full justify-center items-center h-full">
        <div className="flex justify-between items-center gap-x-4 h-full w-full max-w-6xl max-md:flex-col max-md:gap-y-4 max-md:justify-normal">
          {/* left (image)*/}
          <div className="basis-1/2 max-md:basis-0">
            <Image
              src={"/images/contact.jpg"}
              width={600}
              height={1920}
              alt="contact us"
              className="object-cover rounded-md shadow-lg max-md:h-52"
            />
          </div>
          {/* right (form)*/}
          <div className="basis-full max-md:basis-0 bg-white p-4 rounded-md w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-body flex flex-col gap-y-2 mt-4"
            >
              {/* name */}
              <div>
                <label htmlFor="name" className="max-md:text-caption text-body">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John"
                  className={`outline-none border-2 border-slate-900/50 ${
                    errors.name && "border-red-500"
                  } p-2 max-md:p-1 rounded-md w-full`}
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
                <label
                  htmlFor="email"
                  className="max-md:text-caption text-body"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className={`outline-none border-2 border-slate-900/50 ${
                    errors.email && "border-red-500"
                  } p-2 max-md:p-1 rounded-md w-full`}
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
                <label
                  htmlFor="subject"
                  className="max-md:text-caption text-body"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Request"
                  className={`outline-none border-2 border-slate-900/50 ${
                    errors.subject && "border-red-500"
                  } p-2 max-md:p-1 rounded-md w-full`}
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
                <label
                  htmlFor="message"
                  className="max-md:text-caption text-body"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Compose ..."
                  className={`outline-none border-2 border-slate-900/50 ${
                    errors.message && "border-red-500"
                  } p-2 max-md:p-1 rounded-md w-full`}
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
                  className="outline-none bg-slate-900 text-white text-body max-md:text-caption font-semibold px-4 py-2 rounded-md"
                >
                  Let&apos;s discuss
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
