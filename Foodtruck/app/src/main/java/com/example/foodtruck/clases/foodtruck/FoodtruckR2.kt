package com.example.foodtruck.clases.foodtruck

import com.example.foodtruck.clases.comida.Comida
import com.example.foodtruck.clases.persona.Persona

class FoodtruckR2(
    id: Int,
    nombre_ft: String,
    latitud_ft: String,
    longitud_ft: String,
    usuario_ft: String,
    contrasenia_ft: String,
    var id_prs: Int
) : Foodtruck(
    id, nombre_ft, latitud_ft, longitud_ft, usuario_ft, contrasenia_ft
) {
}