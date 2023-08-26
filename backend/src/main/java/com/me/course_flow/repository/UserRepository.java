package com.me.course_flow.repository;
import com.me.course_flow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User,Long> {
}