# --- Stage 1: base runtime ---
FROM node:20-alpine

# Set work directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install --only=production

COPY . .

# Expose WebSocket port
EXPOSE 9090

# Run the server
CMD ["node", "server.js"]

