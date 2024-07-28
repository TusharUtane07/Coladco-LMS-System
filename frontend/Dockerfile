# Use the official Node image from the Docker Hub with specific version
FROM node:14.15.0

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Install `serve` as a local dependency
RUN npm install serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app using `serve`
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
