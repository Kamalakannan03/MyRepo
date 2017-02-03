package com.application.model;

import org.springframework.data.annotation.Id;

@entity
public class ProductDetails {
	
@Id
private Long ProductId;
private String Name;

public Long getProductId() {
	return ProductId;
}
public void setProductId(Long productId) {
	ProductId = productId;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}

}
