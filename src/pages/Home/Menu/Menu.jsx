
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";


const Menu = () => {
    const [menu] = UseMenu ();
    const popular = menu.filter(item => item.catagory === 'popular')
  
    return (
       <section className="mb-12 ">
        <SectionTitle
        heading={"from our menu"}
        subheading={"our items"}
        ></SectionTitle>
         <div className="grid md:grid-cols-2 gap-4">
            {
                popular.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        
        </div>
        <button className="btn btn-outline">view full menu</button>
       </section>
      
    );
};

export default Menu;