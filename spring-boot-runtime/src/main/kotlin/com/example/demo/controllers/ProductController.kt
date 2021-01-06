package com.example.demo.controllers
import com.example.demo.models.Product
import com.example.demo.models.ProductId
import com.example.demo.services.ProductsService
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import kotlin.random.Random

@RestController()
@RequestMapping("/product", produces = [MediaType.APPLICATION_JSON_VALUE])
@CrossOrigin()
class ProductController(val productsService: ProductsService) {
    @GetMapping
    fun getProducts() = productsService.getProducts()

    @PutMapping("/{id}", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun updateProduct(@PathVariable(required = true) id: String, @RequestBody(required = true) product: Product) = productsService.updateProduct(id, product)

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun createProduct(@RequestBody product: Product) =  productsService.createProduct(product)

    @DeleteMapping("/{id}")
    fun deleteProduct(@PathVariable(required = true) id: String) = productsService.deleteProduct(id)
}