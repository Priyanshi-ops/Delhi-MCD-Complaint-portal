package com.example.login_signup_complaint_backend.controller;

import com.example.login_signup_complaint_backend.entity.Complaint;
import com.example.login_signup_complaint_backend.service.ComplaintService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "http://localhost:5173")
public class ComplaintController {
    private final ComplaintService complaintService;
    public ComplaintController(ComplaintService complaintService){
        this.complaintService=complaintService;
    }

    @PostMapping
    public Complaint createComplaint(@RequestBody Complaint complaint){
        return complaintService.saveComplaint(complaint);
    }

    @GetMapping
    public List<Complaint> getAllComplaints(){
        return complaintService.getAllComplaints();
    }
    @GetMapping("/{id}")
    public Complaint getComplaintById(@PathVariable Long id){
        return complaintService.getComplaintById(id);
    }
}
