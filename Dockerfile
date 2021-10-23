FROM node:16.6.1-buster

RUN apt-get update && \
     apt-get install -y \
     neofetch \
     chromium \
     ffmpeg \
     wget \
     mc \
     imagemagick && \
     rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@7.20.5
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", ".", "--db", "mongodb+srv://ilman:Q852.u.27ef2FyM@cluster2.mhfya.mongodb.net/SHIRAORI?retryWrites=true&w=majority"]`
