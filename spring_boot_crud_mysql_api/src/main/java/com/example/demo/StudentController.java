package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/student")
@CrossOrigin(origins= {"http://localhost:3000"})
public class StudentController {

	@Autowired
	StudentImpl studentImpl;

	@GetMapping("/id")
	public ResponseEntity<Student> getMobile(@RequestParam Integer id) {
		Optional<Student> mb=studentImpl.findById(id);
		Student mn=mb.get();
		return new ResponseEntity<Student>(mn,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Student>> getMobiles() {
		List<Student> mobile=(List<Student>) studentImpl.findAll();
		return new ResponseEntity<List<Student>>(mobile,HttpStatus.OK);
	}
	
	@PostMapping("/post")
	public ResponseEntity<Student> postMobile(@RequestBody Student mobile) {
		studentImpl.save(mobile);
		return new ResponseEntity<Student>(mobile, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> postMobile(@RequestParam Integer id) {
		studentImpl.deleteById(id);
		return new ResponseEntity<String>("Resource deleted", HttpStatus.OK);
	}
	
}
