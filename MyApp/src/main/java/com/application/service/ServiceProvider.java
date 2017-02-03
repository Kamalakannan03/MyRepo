package com.application.service;

import org.springframework.stereotype.Service;

import com.application.model.ProductDetails;

@Service
public interface ServiceProvider {
	
	public void createProduct(ProductDetails details);

}
