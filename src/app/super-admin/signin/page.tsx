"use client";

import { LoginForm } from "@/components/login-form";

export default function SuperAdminLoginPage() {
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

        <LoginForm />

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
