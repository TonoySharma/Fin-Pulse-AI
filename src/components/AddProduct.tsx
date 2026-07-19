"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  FiBookOpen,
  FiDollarSign,
  FiAlertCircle,
  FiTag,
  FiMapPin,
  FiCalendar,
  FiUploadCloud,
} from "react-icons/fi";

import FadeUp from "./FadeUp";
import { authClient } from "@/lib/auth-client";

interface FormData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  type: string;
  amount: number;
  date: string;
  priority: "Low" | "Medium" | "High";
  location: string;
}

export default function ProductForm() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    type: "Expense",
    amount: 0,
    date: "",
    priority: "Medium",
    location: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";


      if (imageFile) {
        const imgBbFormData = new FormData();
        imgBbFormData.append("image", imageFile);


        const imgBbKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

        const imgBbResponse = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgBbKey}`,
          {
            method: "POST",
            body: imgBbFormData,
          }
        );

        const imgBbData = await imgBbResponse.json();

        if (imgBbData.success) {
          imageUrl = imgBbData.data.url;
        } else {
          throw new Error("Image upload to ImgBB failed");
        }
      }


      const { data: token } = await authClient.token();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/add-features`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token?.token}`,
          },
          body: JSON.stringify({
            ...formData,
            image: imageUrl,
            currency: "BDT",
            status: "Completed",
            rating: 0,
            createdAt: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        toast.success("Card added successfully");
        setFormData({
          title: "",
          shortDescription: "",
          fullDescription: "",
          category: "",
          type: "Expense",
          amount: 0,
          date: "",
          priority: "Medium",
          location: "",
        });
        setImageFile(null);

        const fileInput = document.getElementById("image-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        toast.error("Backend error");
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <FadeUp className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
      
        <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-600 rounded-full animate-spin" />

   
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 animate-pulse tracking-wide">
          Checking authentication...
        </p>
      </FadeUp>
    );
  }
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md border">
      <FadeUp>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiBookOpen className="text-blue-500" />
          Add Expense
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Title</label>
            <input
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Monthly Apartment Rent"
              className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Short Description</label>
            <input
              name="shortDescription"
              required
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Paid monthly house rent"
              className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>

          {/* Full Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Full Description</label>
            <textarea
              name="fullDescription"
              rows={4}
              required
              value={formData.fullDescription}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Category</label>
              <div className="relative">
                <FiTag className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Housing"
                  className="w-full pl-10 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
                />
              </div>
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Amount</label>
              <div className="relative">
                <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  name="amount"
                  required
                  value={formData.amount === 0 ? "" : formData.amount}
                  onChange={handleChange}
                  placeholder="28000"
                  className="w-full pl-10 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Date</label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
                />
              </div>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Priority</label>
              <div className="relative">
                <FiAlertCircle className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full pl-10 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Location</label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Gulshan, Dhaka"
                className="w-full pl-10 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
              />
            </div>
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Upload Receipt / Image (Optional)</label>
            <div className="relative">
              <FiUploadCloud className="absolute left-3 top-3  text-gray-500" />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full pl-10 px-3 py-1.5 border rounded-lg dark:bg-zinc-800
                 dark:border-zinc-700 file:mr-4 file:py-0.5 file:px-2 file:rounded-md file:border-0
                  file:text-xs file:font-semibold file:bg-zinc-200 dark:file:bg-zinc-700
                   dark:file:text-zinc-200 cursor-pointer"
              />
            </div>
          </div>

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </form>
      </FadeUp>
    </div>
  );
}