# Stage 1: Build
FROM node:20 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --f

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Deploy
FROM nginx:alpine

# Copy the built React app from the build stage to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 3000

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
