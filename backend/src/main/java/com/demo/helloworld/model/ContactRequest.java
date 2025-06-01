package com.demo.helloworld.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank(message = "Name is required")
        @Size(max = 100, message = "Name can't be longer than 100 characters")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Email should be valid")
        String email,

        @NotBlank(message = "Message is required")
        @Size(max = 1000, message = "Message can't be longer than 1000 characters")
        String message
) {}
