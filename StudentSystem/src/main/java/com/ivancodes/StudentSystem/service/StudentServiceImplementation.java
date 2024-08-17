package com.ivancodes.StudentSystem.service;

import com.ivancodes.StudentSystem.model.Student;
import com.ivancodes.StudentSystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService{

    @Autowired
    private StudentRepo studentRepo;
    @Override
    public Student saveStudent(Student student) {

        return studentRepo.save(student);
    }
    @Override
    public List<Student> getAllStudents() {

        return studentRepo.findAll();
    }
}
