package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	UserDao dao;
	@Autowired
	UserRepo repo;
//	@PostMapping("/insert")   //not working
//   public User insert(@RequestBody User u) {
//      return dao.insert(u);
//   }
	@GetMapping("/getall")
   public List<User> getall(){
		return dao.getall();
	}
	 @RequestMapping("/loginto")
	    public User showLogin() {
	        return new User();
	    }
	  @PostMapping("/login")
	   public User loginUser(@RequestBody User user) throws Exception{
		String email=user.getEmail();
		String password=user.getPassword();
		User userObj=null;
		if(email!=null && password!=null) {
			userObj=repo.findByEmailAndPassword(email,password);
			}
		
		if(userObj ==null) {
			throw new Exception("Incorrect input");
		}
		return userObj;
		}	
	}
