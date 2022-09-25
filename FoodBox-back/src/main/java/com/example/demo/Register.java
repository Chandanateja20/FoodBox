package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Register {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String registername;
	private String email;
	private String password;

}
