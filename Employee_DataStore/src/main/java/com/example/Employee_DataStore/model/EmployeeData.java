package com.example.Employee_DataStore.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "EmployeeInfo")
public class EmployeeData 
{
	 @Id
	   private String id;
	   private String firstname;
	   private String lastname;
	   private String role;
	   private int salary;
	   private long phonenbr;
	   private String email;
	   private String location;
	   private String project;
	   
	public EmployeeData(String id, String firstname, String lastname, String role, int salary, long phonenbr,
			String email, String location, String project) 
	{
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.role = role;
		this.salary = salary;
		this.phonenbr = phonenbr;
		this.email = email;
		this.location = location;
		this.project = project;
	}
	
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public long getPhonenbr() {
		return phonenbr;
	}

	public void setPhonenbr(long phonenbr) {
		this.phonenbr = phonenbr;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	@Override
	public String toString() 
	{
		return "EmployeeData [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", role=" + role
				+ ", salary=" + salary + ", phonenbr=" + phonenbr + ", email=" + email + ", location=" + location
				+ ", project=" + project + "]";
	}
		   
}
