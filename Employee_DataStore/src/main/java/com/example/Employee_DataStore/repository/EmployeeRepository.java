package com.example.Employee_DataStore.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Employee_DataStore.model.EmployeeData;

@Repository
public interface EmployeeRepository extends MongoRepository<EmployeeData, String> {

//	List<EmployeeData> getEmployeeId(String id);

}
