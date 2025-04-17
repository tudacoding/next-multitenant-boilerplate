import { LoginForm } from "@/components/login-form"

export default function Page() {
  const handleSubmit = async () => {
    // Xử lý đăng nhập ở đây
    console.log('Dữ liệu đăng nhập:')
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
