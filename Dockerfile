# Sử dụng image cơ sở Ubuntu để build ứng dụng React
FROM node:20

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build


# Sao chép các tệp build từ image build trước (stage build)
COPY --from=build /app/build /var/www/html

# Cổng mặc định của Nginx
EXPOSE 3000

# Lệnh để khởi động Nginx khi container được chạy
CMD ["nginx", "-g", "daemon off;"]
