package com.ivancodes.StudentSystem.controller;

import com.ivancodes.StudentSystem.model.Student;
import com.ivancodes.StudentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student)
    {
        studentService.saveStudent(student);
        return "added new student";

    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents()
    {
        return studentService.getAllStudents();
    }





}
