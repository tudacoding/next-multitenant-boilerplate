import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginFormProps {
  className?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading?: boolean
}

export function LoginForm({
  className,
  onSubmit,
  isLoading = false,
}: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Đăng nhập vào tài khoản của bạn</CardTitle>
          <CardDescription>
            Nhập email của bạn bên dưới để đăng nhập vào tài khoản
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  required 
                  disabled={isLoading}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
                <Button variant="outline" className="w-full" disabled={isLoading}>
                  Đăng nhập với Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Bạn chưa có tài khoản?{" "}
              <a href="#" className="underline underline-offset-4">
                Đăng ký
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
