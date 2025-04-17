import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/fest-3.jpeg"
            alt="Hình ảnh sự kiện"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="TicketFast Logo"
                width={60}
                height={60}
                className="mr-4"
              />
              <h1 className="text-5xl font-bold">TicketFast</h1>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Khám phá sự kiện tuyệt vời
            </h2>
            <p className="text-xl mb-8">
              Tìm kiếm và đặt vé cho các sự kiện hàng đầu một cách dễ dàng
            </p>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary">Tìm kiếm</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại sao chọn TicketFast?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <CardTitle>Đặt vé dễ dàng</CardTitle>
                <CardDescription>
                  Quy trình đặt vé đơn giản và nhanh chóng
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Chỉ với vài cú nhấp chuột, bạn có thể đặt vé cho sự kiện yêu
                  thích
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <CardTitle>Thanh toán an toàn</CardTitle>
                <CardDescription>
                  Hệ thống thanh toán bảo mật và đáng tin cậy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Hỗ trợ nhiều phương thức thanh toán với bảo mật cao</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <CardTitle>Hỗ trợ 24/7</CardTitle>
                <CardDescription>
                  Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Giải đáp mọi thắc mắc và hỗ trợ bạn bất cứ lúc nào</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sự kiện nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Buổi hòa nhạc đặc biệt",
                date: "Ngày 15/12/2024 - 20:00",
                price: "500.000đ",
                image: "/images/fest-1.jpg",
              },
              {
                id: 2,
                title: "Festival âm nhạc mùa hè",
                date: "Ngày 20/07/2024 - 14:00",
                price: "750.000đ",
                image: "/images/fest-2.jpg",
              },
              {
                id: 3,
                title: "Triển lãm nghệ thuật",
                date: "Ngày 05/08/2024 - 09:00",
                price: "300.000đ",
                image: "/images/fest-3.jpeg",
              },
            ].map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="mb-2">
                    Sắp diễn ra
                  </Badge>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{event.price}</span>
                    <Button>Đặt vé</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/fest-1.jpg"
            alt="Hình ảnh đăng ký"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            Sẵn sàng tham gia sự kiện với TicketFast?
          </h2>
          <p className="text-xl mb-8">
            Đăng ký ngay để nhận thông báo về các sự kiện mới nhất
          </p>
          <div className="flex justify-center gap-4">
            <Input
              type="email"
              placeholder="Email của bạn"
              className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">Đăng ký</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
