package com.example.Employee_DataStore.controller;

import java.util.List;
import java.util.Optional;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Employee_DataStore.model.EmployeeData;
import com.example.Employee_DataStore.service.EmployeeService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

	@Autowired
	public EmployeeService employeeService;
	
	  
	
//	public List<EmployeeData>  createData(@RequestBody List<EmployeeData> employeeData)
//	{
//		return employeeService.createData(employeeData);
//	}
	@PostMapping
	public EmployeeData createData(@RequestBody EmployeeData employeeData) {
	    return employeeService.createSingleData(employeeData); // write this method to save one
	}
	
	@GetMapping
	public List<EmployeeData> getAllData()
	{
		return employeeService.getAllData();
	}
	

	@GetMapping("/{id}")
	public Optional<EmployeeData> getEmployeeId(@PathVariable String id)
	{
		return employeeService.getEmployeeId(id);
	}
	
	@PutMapping("/{id}")
	public EmployeeData updateEmployee(@PathVariable String id, @RequestBody EmployeeData newData) {
	    return employeeService.updateEmployee(id, newData);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable String id) 
	{
	    return  employeeService.deleteEmployee(id);
	}

	
}
