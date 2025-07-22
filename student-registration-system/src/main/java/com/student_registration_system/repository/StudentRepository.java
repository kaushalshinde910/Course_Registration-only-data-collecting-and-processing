package com.student_registration_system.repository;

import com.student_registration_system.model.Student; // ✅ Add this import
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    
}
