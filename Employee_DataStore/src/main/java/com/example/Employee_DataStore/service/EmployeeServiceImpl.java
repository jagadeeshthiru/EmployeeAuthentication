package com.example.Employee_DataStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Employee_DataStore.model.EmployeeData;
import com.example.Employee_DataStore.repository.EmployeeRepository;


@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	public EmployeeRepository employeeRepository;

//	@Override
//	public List<EmployeeData> createData(List<EmployeeData> employeeData) {
//		return employeeRepository.saveAll(employeeData);
//	}

	@Override
	public EmployeeData createSingleData(EmployeeData employeeData) {
		
		return employeeRepository.save(employeeData);

	}
	
	@Override
	public List<EmployeeData> getAllData() 
	{
		
		return employeeRepository.findAll() ;
	}
	
	@Override
	public Optional<EmployeeData> getEmployeeId(String id) {
		
		return employeeRepository.findById(id);
	}
	@Override
	public EmployeeData updateEmployee(String id, EmployeeData newData) {
		  return employeeRepository.findById(id).map(employee -> {
		        employee.setFirstname(newData.getFirstname());
		        employee.setLastname(newData.getLastname());
		        employee.setRole(newData.getRole());
		        employee.setSalary(newData.getSalary());
		        employee.setPhonenbr(newData.getPhonenbr());
		        employee.setEmail(newData.getEmail());
		        employee.setLocation(newData.getLocation());
		        employee.setProject(newData.getProject());
		        return employeeRepository.save(employee);
		    }).orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
		}	
	@Override
	public String deleteEmployee(String id) {
	    if (employeeRepository.existsById(id)) {
	        employeeRepository.deleteById(id);
	        return "Employee with ID " + id + " deleted successfully.";
	    } else {
	        return "Employee not found with ID: " + id;
	    }
	}
}
