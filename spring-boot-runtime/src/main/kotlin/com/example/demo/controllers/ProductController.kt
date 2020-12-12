package com.example.demo.controllers
import com.example.demo.models.Product
import com.example.demo.models.ProductId
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import kotlin.random.Random

@RestController()
@RequestMapping("/product", produces = [MediaType.APPLICATION_JSON_VALUE])
@CrossOrigin()
class ProductController {
    @GetMapping
    fun getProducts() = listOf(
         Product("1", "Mac Book Pro", "14 Inch Mac Book Pro, Space Grey",quantity = 23),
        Product("2", "Dell XPS", "16 Inch Dell XPS, 512GB",quantity = 3),
        Product("3", "Surface Laptop", "Microsoft Surface Laptop",quantity = 29),
        Product("4", "Asus Zendbook", "Asus Zendbook AMD Rizen",quantity = 21),
        Product("5", "Dell Inspiron 15", "Dell Inspiron 15 FHD Screen",quantity = 2)
    )

    @PutMapping("/{id}", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun updateProduct(@PathVariable(required = true) id: String, @RequestBody(required = true) product: Product) = product.copy()

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE])
    @ResponseBody
    fun createProduct(@RequestBody product: Product) =  product.copy(id = Random.nextInt().toString())

    @DeleteMapping("/{id}")
    fun deleteProduct(@PathVariable(required = true) id: String) = ProductId(id)
}