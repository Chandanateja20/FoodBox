package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactDao {

	@Autowired
	ContactRepo contactrepo;

	    public boolean saveMessage(Contact contact){
	        contactrepo.save(contact);
	        return true;
	    }
}
