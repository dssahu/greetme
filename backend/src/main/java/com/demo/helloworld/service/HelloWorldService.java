package com.demo.helloworld.service;

import com.demo.helloworld.model.*;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {

    @Autowired
    private JavaMailSender mailSender;

    public GreetingResponse greet(String name) {
        String greeting = "Hello, " + name + "!";
        GreetingResponse response = new GreetingResponse(greeting);
        return response;
    }

    public void sendMessage(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("sahudeepanwita27.com"); // TODO: Replace with your email
        message.setSubject("New Contact Form Submission from " + request.name());
        message.setText(
                "Name: " + request.name() + "\n" +
                        "Email: " + request.email() + "\n\n" +
                        "Message:\n" + request.message()
        );
        mailSender.send(message);
    }
}