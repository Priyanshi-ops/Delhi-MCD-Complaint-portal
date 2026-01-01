package com.example.login_signup_complaint_backend.repository;

import com.example.login_signup_complaint_backend.entity.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Long> {

}
