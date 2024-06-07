import React from 'react';
import Cover from '../shared/Cover/Cover';
import MenuImg from '../../assets/menu/banner3.jpg';
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import MenuItem from '../shared/menuItem/MenuItem';



const MenuBar = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.catagory === 'dessert')
    const soup = menu.filter(item => item.catagory === 'soup')
    const salad = menu.filter(item => item.catagory === 'salad ')
    const pizza = menu.filter(item => item.catagory === 'pizza')
    const offered = menu.filter(item => item.category === 'offered ')
    return (
        <div>
           <Cover pic={MenuImg} title="our menu" para="Would you like to try a dish?"></Cover>
           <SectionTitle subheading="dont miss" heading="dont miss"></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>
           <div className="grid md:grid-cols-2 gap-4">
            {
                items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        
        </div>
       
          
           
           
            
        </div>
    );
};

export default MenuBar;