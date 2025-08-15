# Radio Player App

A web-based radio player with a Node.js/Express backend and simple modern frontend. The backend serves radio station metadata and proxies the audio stream, while the frontend provides a user-friendly interface to play the radio.

---

## Live Demo

- **Frontend:**  
  https://radio-api-nine.vercel.app/

- **Backend API (Production):**  
  [https://radio-api-8yws.onrender.com](https://radio-api-8yws.onrender.com)

---

## Project Structure

```
prod-task/
│
├── backend/
│   ├── .env
│   ├── package.json
│   └── src/
│       ├── server.js
│       ├── controllers/
│       │   └── stream.controller.js
│       └── routes/
│           └── stream.routes.js
│
└── frontend/
    ├── index.html
    └── script.js
```

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd prod-task
```

### 2. Backend Setup

#### Install dependencies

```sh
cd backend
npm install
```

#### Configure environment

Edit .env if needed:

```
PORT=5000
STREAM_URL=https://your-stream-url
```

#### Start the server

```sh
npm start
```

The backend will run at [http://localhost:5000](http://localhost:5000).

### 3. Frontend Setup

Open index.html directly in your browser.

---

## Usage

1. Click **Load Station** to fetch station info and start the stream.
2. The player will display the station name, description, and play the audio.

---

## API Documentation

### `GET /api/stream`

**Description:**  
Returns metadata about the radio station and the URL to stream audio.

**Example Request:**
```sh
curl https://radio-api-8yws.onrender.com/api/stream
```

**Example Response:**
```json
{
  "name": "My Radio Station",
  "description": "24/7 music and talk shows.",
  "streamUrl": "https://radio-api-8yws.onrender.com/api/radio"
}
```

**Fields:**
- `name` (string): The name of the radio station.
- `description` (string): A short description of the station.
- `streamUrl` (string): The URL to stream the radio audio (proxied by your backend).

---

### `GET /api/radio`

**Description:**  
Streams the radio audio (Content-Type: audio/mpeg).

**Example Request:**
```sh
curl -v https://radio-api-8yws.onrender.com/api/radio
```

**Example Result:**  
You will receive a binary audio stream. You can test this in a browser or with a media player that supports streaming.

---

## API Testing & Results

### Test `/api/stream` with curl

```sh
curl https://radio-api-8yws.onrender.com/api/stream
```

**Expected Output:**
```json
{
  "name": "My Radio Station",
  "description": "24/7 music and talk shows.",
  "streamUrl": "https://radio-api-8yws.onrender.com/api/radio"
}
```

### Test `/api/radio` with curl

```sh
curl -I https://radio-api-8yws.onrender.com/api/radio
```

**Expected Output:**
```
HTTP/2 200
content-type: audio/mpeg
...
```
You can also open `https://radio-api-8yws.onrender.com/api/radio` in your browser or a media player to listen to the stream.

---

## Frontend Integration

The frontend fetches station data and sets up the audio player using the `/api/stream` endpoint.  
**Note:** In your `script.js`, the code expects the property name `streamUrl` from the API.

---


**Made with ❤️ for music lovers!**