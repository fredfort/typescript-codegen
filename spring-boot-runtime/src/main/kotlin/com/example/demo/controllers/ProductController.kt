package com.example.demo.controllers
import com.example.demo.models.Product
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins =  ["*"])
class ProductController {

    @GetMapping("/product")
    fun getProducts() = listOf(Product(1, "P1"), Product(2, "P2"))

    @GetMapping("/product/{id}")
    fun getProduct(@PathVariable(value = "id", required = true) id: String) = Product(id.toLong(), "P1")


}