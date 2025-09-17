"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Введите имя"),
  email: z.string().email("Неверный email"),
  subject: z.string().min(1, "Введите тему"),
  message: z.string().min(1, "Введите сообщение"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Отправка формы или API вызов
  };

  return (
    <div className="bg-white w-full flex flex-col lg:flex-row items-center justify-between px-4 py-12 max-w-6xl mx-auto">
      {/* Форма */}
      <div className="w-full lg:w-1/2">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "#151875" }}
        >
          Get In Touch
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your Name*"
                {...register("name")}
                className="w-full bg-white text-black border border-gray-300 rounded p-2 placeholder-gray-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Your E-mail*"
                {...register("email")}
                className="w-full bg-white text-black border border-gray-300 rounded p-2 placeholder-gray-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="Subject*"
            {...register("subject")}
            className="w-full bg-white text-black border border-gray-300 rounded p-2 placeholder-gray-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}

          <textarea
            placeholder="Type Your Message*"
            {...register("message")}
            className="w-full bg-white text-black border border-gray-300 rounded p-2 h-32 placeholder-gray-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
          >
            Send Mail
          </button>
        </form>
      </div>

      {/* Фото справа */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src="/fon.png"
          alt="Contact illustration"
          className="max-w-md w-full"
        />
      </div>
    </div>
  );
}
