package com.ivancodes.StudentSystem.service;

import com.ivancodes.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
