package com.example.login_signup_complaint_backend.service;


import com.example.login_signup_complaint_backend.entity.Complaint;
import com.example.login_signup_complaint_backend.repository.ComplaintRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {
    public final ComplaintRepository complaintRepository;
    public ComplaintService(ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }
    public Complaint saveComplaint(Complaint complaint){
        return complaintRepository.save(complaint);
    }
    public List<Complaint> getAllComplaints(){
        return complaintRepository.findAll();
    }
    public Complaint getComplaintById(Long id) {
        return complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found with id: " + id));
    }
}
