"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    reset();
    alert("Message sent!");
  };

  const faqItems = [
    {
      question: "Eu dictumst cum at sed euismod condimentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Magna bibendum est fermentum eros.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Odio muskana hak eris conseekin skeleton?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Elit id blandit sabara boi velit gua mara?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row gap-10 px-6 py-12 max-w-7xl mx-auto">
      {/* FAQ Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">
          Generel Information
        </h2>
        {faqItems.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-sm text-[#1D3178] mb-1">
              {item.question}
            </h3>
            <p className="text-sm text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-[#f8f8fc] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4 text-[#1D3178]">
          Ask a Question
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              {...register("name")}
              placeholder="Your Name*"
              className="w-full bg-white text-black border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              {...register("subject")}
              placeholder="Subject*"
              className="w-full bg-white text-black border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message")}
              placeholder="Type Your Message*"
              rows={5}
              className="w-full bg-white text-black border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-2 rounded transition duration-200"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
