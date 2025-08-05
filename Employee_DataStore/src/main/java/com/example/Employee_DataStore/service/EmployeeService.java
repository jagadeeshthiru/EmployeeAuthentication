package com.example.Employee_DataStore.service;

import java.util.List;
import java.util.Optional;

import com.example.Employee_DataStore.model.EmployeeData;

public interface EmployeeService {

//	List<EmployeeData> createData(List<EmployeeData> employeeData);

	List<EmployeeData> getAllData();

	EmployeeData createSingleData(EmployeeData employeeData);

	EmployeeData updateEmployee(String id, EmployeeData newData);

//	void deleteEmployee(String id);
	String deleteEmployee(String id);
	
	

	Optional<EmployeeData> getEmployeeId(String id);

//	EmployeeData updateEmployee(String id, EmployeeData updatedData);
     
}
