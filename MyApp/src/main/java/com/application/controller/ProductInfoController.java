package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.solr.core.RequestMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.model.ProductDetails;
import com.application.service.ServiceProvider;




@RestController
public class ProductInfoController {
	
	@Autowired
	ServiceProvider serviceProvider;

	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public @ResponseBody String createOrUpdate(ProductDetails details){
		
	}
}
