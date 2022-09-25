import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string) :Foods[] {
     return tag=="All"?
     this.getAll() : this.getAll().filter(food=>food.tags?.
      includes(tag));
  }
  getAllTag():Tag[]{
    return[
      {name: 'All', count:12},
      {name: 'Fastfood', count:7},
      {name: 'Pizza', count:2},
      {name: 'Lunch',count:6},
      {name: 'Slowfood',count:3},
      {name: 'Fry',count:2}

    ]
  }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Burrito',
        cooktime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Mexican'],
        star: 4.0,
        imageUrl: '/assets/food1.jpg',
        tags: ['Fastfood','Lunch'],
      },
      {
        id: 2,
        name: 'Veg Zinger',
        cooktime: '30-40',
        price: 20,
        favorite: true,
        origins: ['UK'],
        star: 4.7,
        imageUrl: '/assets/food2.jpg',
        tags: ['Fastfood','Lunch'],
      },
      {
        id: 3,
        name: 'Sandwich',
        cooktime: '10-20',
        price: 7,
        favorite: false,
        origins: ['Mexican'],
        star: 3.8, 
        imageUrl: '/assets/food3.jpg',
        tags: ['Fastfood','Fry'],
      },
      {
        id: 4,
        name: 'Noodles',
        cooktime: '25-30',
        price: 13,
        favorite: true,
        origins: ['Mexico'],
        star: 4.2,
        imageUrl: '/assets/food4.jpg',
        tags: ['Slowfood','Lunch'],
      },
      {
        id: 5,
        name: 'French Fries',
        cooktime: '10-20',
        price: 8,
        favorite: true,
        origins: ['France'],
        star: 4.7,
        imageUrl: '/assets/food5.jpg',
        tags: ['Fastfood','Fry'],
      },
      {
        id: 6,
        name: 'Veg Roll',
        cooktime: '10-20',
        price: 12,
        favorite: false,
        origins: ['India'],
        star: 3.8,
        imageUrl: '/assets/food6.jpg',
        tags: ['Slowfood','Lunch'],
      },
      {
        id: 7,
        name: 'Biryani',
        cooktime: '35-45',
        price: 10,
        favorite: true,
        origins: ['India'],
        star: 4.9,
        imageUrl: '/assets/food7.jpg',
        tags: ['Slowfood','Lunch'],
      },
      {
        id: 8,
        name: 'Milk Chocolate Cake',
        cooktime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Egypt'],
        star: 3.0,
        imageUrl: '/assets/food8.jpg',
        tags: ['Snacks'],
      },
      {
        id: 9,
        name: 'Salad',
        cooktime: '55-60',
        price: 10,
        favorite: false,
        origins: ['France'],
        star: 4.2,
        imageUrl: '/assets/food9.jpg',
        tags: ['Fastfood'],
      },
      {
        id: 10,
        name: 'Shrimp Rice',
        cooktime: '10-20',
        price: 13,
        favorite: false,
        origins: ['Russia'],
        star: 4.1,
        imageUrl: '/assets/food10.jpg',
        tags: ['Lunch'],
      },
      {
        id: 11,
        name: 'Pepperoni Pizza',
        cooktime: '30-40',
        price: 14,
        favorite: false,
        origins: ['USA'],
        star: 4.1,
        imageUrl: '/assets/food11.jpg',
        tags: ['Fastfood','Pizza'],
      },
      {
        id: 12,
        name: 'Margherita Pizza',
        cooktime: '40-50',
        price: 15,
        favorite: true,
        origins: ['USA'],
        star: 4.7,
        imageUrl: '/assets/food12.jpg',
        tags: ['Fastfood','Pizza'],
      },
      
    ]

  }
}
