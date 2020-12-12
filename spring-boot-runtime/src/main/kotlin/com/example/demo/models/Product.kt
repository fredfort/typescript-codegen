package com.example.demo.models

data class Product(val id: String?, val name: String, val description: String, val quantity: Int = 0)


data class ProductId(val id: String)