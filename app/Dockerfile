# Pake base image yang ringan
FROM node:18-alpine

# Set folder kerja di dalam container
WORKDIR /usr/src/app

# Copy package.json dulu biar caching-nya optimal
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy sisa kodingan (app.js, views, dll)
COPY . .

# Expose port internal aplikasi (sesuai app.js)
EXPOSE 3000

# Jalanin aplikasinya
CMD ["node", "app.js"]