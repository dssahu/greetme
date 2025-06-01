package com.demo.helloworld.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.helloworld.model.*;
import com.demo.helloworld.service.*;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class HelloWorldController {

    @Autowired
    private HelloWorldService helloWorldService;

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
    @PostMapping(value = "/greet", produces = "application/json")
    public ResponseEntity<GreetingResponse> greet(@RequestBody NameRequest request) {
        GreetingResponse response = helloWorldService.greet(request.name());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/contact")
    public ResponseEntity<?> sendMessage(@Valid @RequestBody ContactRequest request) {
        try {
            helloWorldService.sendMessage(request);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send email");
        }
        return ResponseEntity.ok("Thank you for contacting us, " + request.name() + "!");
    }

}
