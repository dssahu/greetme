
# Hello World Docker - React + Spring Boot
Demo Full Stack project for learning docker


This is a simple full-stack application using **React** for the frontend and **Spring Boot** for the backend. Both services are Dockerized and managed using **Docker Compose**.

---

## 🧰 Tech Stack

- **Frontend**: React (JavaScript)
- **Backend**: Spring Boot (Java)
- **Containerization**: Docker
- **Orchestration**: Docker Compose

---

## 📁 Project Structure

hello-world-docker/
├── backend/ # Spring Boot app
│ ├── Dockerfile
│ └── target/hello-world-with-docker-0.0.1-SNAPSHOT.jar
├── frontend/ # React app
│ ├── Dockerfile
│ └── src/
├── docker-compose.yml
└── README.md


---

## 🚀 How to Run the Project

### 1️⃣ Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Maven installed (to build the backend JAR)

---

### 2️⃣ Build the Spring Boot Backend JAR

```bash
cd backend
./mvnw clean package

---

### 3️⃣ Run the Full Stack App with Docker Compose

```bash
docker-compose up --build
```

This command will build and start both the frontend and backend services in Docker containers.

🔍 Access the Applications:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend (API)**: [http://localhost:8080](http://localhost:8080)