package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin()
public class RegistrationController {

    @Autowired
    private UserDao dao;

    @RequestMapping("/register")
    public User showRegister() {
        return new User();
    }
    @PostMapping("/registered")
    public User addUser(@RequestBody User user) {
        System.out.println(user.toString());
        dao.register(user);
        return user;
    }
 
//    @PostMapping("/register")
//	public Register register(@RequestBody User u ) {
//		return repo.save(u);
//	}

   
}
