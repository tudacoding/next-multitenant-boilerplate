"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginForm } from "@/components/login-form";

export default function SuperAdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Thêm logic đăng nhập thực tế
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      router.push("/super-admin/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Đăng nhập Super Admin <br />
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Vui lòng đăng nhập để truy cập vào trang quản trị
          </p>
        </div>

        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Bạn gặp vấn đề khi đăng nhập?{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Liên hệ hỗ trợ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
