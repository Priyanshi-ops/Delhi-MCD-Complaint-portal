package com.example.login_signup_complaint_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.login_signup_complaint_backend.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);
}
