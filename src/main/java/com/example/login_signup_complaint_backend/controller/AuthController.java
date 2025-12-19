package com.example.login_signup_complaint_backend.controller;


import com.example.login_signup_complaint_backend.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
private final UserService userService;
public AuthController(UserService userService){
    this.userService=userService;


}
}
