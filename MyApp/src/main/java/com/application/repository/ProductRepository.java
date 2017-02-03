package com.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.application.model.ProductDetails;

public interface ProductRepository extends CrudRepository<ProductDetails, Long> {

}
