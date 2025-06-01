
# GreetMe Docker - React + Spring Boot

GreetMe is a simple full-stack web application built with **Spring Boot** and **React**. It allows users to submit their name and receive a greeting message.
Both backend and frontend services are Dockerized and managed using **Docker Compose**.

---

## 🧰 Tech Stack

- **Frontend**: React 18, Material UI
- **Backend**: Java 17, Spring Boot
- **Build Tool**: Maven
- **Containerization**: Docker
- **Orchestration**: Docker Compose

---

## 📁 Project Structure

greetme/
├── backend/           # Spring Boot application
│   ├── src/
│   └── pom.xml
├── frontend/          # React application
│   ├── public/
│   ├── src/
│   └── package.json
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
```
---

### 3️⃣ Run the Full Stack App with Docker Compose

```bash
docker-compose up --build
```

This command will build and start both the frontend and backend services in Docker containers.

## 🔍 Access the Applications:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend (API)**: [http://localhost:8080](http://localhost:8080)