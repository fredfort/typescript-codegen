package com.example.demo.services

import com.example.demo.models.Product
import com.example.demo.models.ProductId
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class ProductsService {

    fun getProducts() = listOf(
            Product("1", "Mac Book Pro", "14 Inch Mac Book Pro, Space Grey",quantity = 23),
            Product("2", "Dell XPS", "16 Inch Dell XPS, 512GB",quantity = 3),
            Product("3", "Surface Laptop", "Microsoft Surface Laptop",quantity = 29),
            Product("4", "Asus Zendbook", "Asus Zendbook AMD Rizen",quantity = 21),
            Product("5", "Dell Inspiron 15", "Dell Inspiron 15 FHD Screen",quantity = 2)
    )

    fun createProduct(product: Product) =  product.copy(id = Random.nextInt().toString())

    fun updateProduct(id: String, product: Product) =  product

    fun deleteProduct(id: String) =  ProductId(id)
}