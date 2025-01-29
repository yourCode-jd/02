import { login, searchIcon, wishlist, cart } from "../icons/Icons";

// navigation
export const navLinks = [
    { 
        href: "/", key: "home", label: "home",
        subMenu:[
            { id:"1", href: "/", img: "/product01.png", label: "product 1" },
            { id:"2", href: "/", img: "/product01.png", label: "product 2" },
            { id:"3", href: "/", img: "/product01.png", label: "product 3" },
            { id:"4", href: "/", img: "/product01.png", label: "product 4" },
            { id:"5", href: "/", img: "/product01.png", label: "product 5" },
            { id:"6", href: "/", img: "/product01.png", label: "product 6" },
            { id:"7", href: "/", img: "/product01.png", label: "product 7" },
            { id:"8", href: "/", img: "/product01.png", label: "product 8" },
        ]

    },
    { href: "/", key: "shop",   label: "shop",
        megaMenu: [
            {  id:"1", href: "/", label: "Logbook",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },   
                    { id:"2", href: "/", label: "Simple" },
                    { id:"3", href: "/", label: "Overlay" },
                    { id:"4", href: "/", label: "Overlay Side" },
                    { id:"5", href: "/", label: "Overlay Side New" },
                    { id:"6", href: "/", label: "Without Sidebar" },    
            ]                               
            },
            {  id:"2", href: "/", label: "Blog",
                subMenu:[
                    { id:"1", href: "/", label: "Blog Classic" },
                    { id:"2", href: "/", label: "Blog Grid" },
                    { id:"3", href: "/", label: "Blog Masonry" },                    
            ]                               
            }, 
            {  id:"3", href: "/", label: "Pages",
                subMenu:[
                    { id:"1", href: "/", label: "About" },
                    { id:"2", href: "/", label: "Contact" },
                    { id:"3", href: "/", label: "Cart" },
                    { id:"4", href: "/", label: "Checkout" },
                    { id:"5", href: "/", label: "Compare" },
                    { id:"6", href: "/", label: "Wishlist" },
                    { id:"7", href: "/", label: "My Account" },
                    { id:"8", href: "/", label: "Order Complete" },                    
            ]                               
            },                            
            {  id:"4", href: "/", label: "portfolio",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },
                    { id:"2", href: "/", label: "Standard With Banner" },
                    { id:"3", href: "/", label: "Categories Image 1" },
                    { id:"4", href: "/", label: "Categories Image 2" },
                    { id:"5", href: "/", label: "Fullwidth" },
                    { id:"6", href: "/", label: "List view" },
                    { id:"7", href: "/", label: "Simple" },
                    { id:"8", href: "/", label: "MansonryHot" },
                    { id:"9", href: "/", label: "Overlay Header" },
                    { id:"10", href: "/", label: "Collection List 1" },
                    { id:"11", href: "/", label: "Collection List 2" },
                    { id:"12", href: "/", label: "Collection SliderNew" },
            ]
            },
                ],
    },
    { href: "/", key: "product",   label: "product",    
        megaMenu: [
            {  id:"1", href: "/", label: "Layout",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },
                    { id:"2", href: "/", label: "Standard With Banner" },
                    { id:"3", href: "/", label: "Categories Image 1" },
                    { id:"4", href: "/", label: "Categories Image 2" },
                    { id:"5", href: "/", label: "Fullwidth" },
                    { id:"6", href: "/", label: "List view" },
                    { id:"7", href: "/", label: "Simple" },
            ]
            },
            {  id:"2", href: "/", label: "Product",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },   
                    { id:"2", href: "/", label: "Simple" },
                    { id:"3", href: "/", label: "Overlay" },
                    { id:"4", href: "/", label: "Overlay Side" },
                    { id:"5", href: "/", label: "Overlay Side New" },
                    { id:"6", href: "/", label: "Without Sidebar" },    
            ]                               
            },
            {  id:"3", href: "/", label: "Pages",
                subMenu:[
                    { id:"1", href: "/", label: "About" },
                    { id:"2", href: "/", label: "Contact" },
                    { id:"3", href: "/", label: "Cart" },
                    { id:"4", href: "/", label: "Checkout" },
                    { id:"5", href: "/", label: "Compare" },
                    { id:"6", href: "/", label: "Wishlist" },
                    { id:"7", href: "/", label: "My Account" },
                    { id:"8", href: "/", label: "Order Complete" },                    
            ]                               
            },                            
            {  id:"4", href: "/", label: "Blog",
                subMenu:[
                    { id:"1", href: "/", label: "Blog Classic" },
                    { id:"2", href: "/", label: "Blog Grid" },
                    { id:"3", href: "/", label: "Blog Masonry" },                    
            ]                               
            }, 
                ],
    },

    { href: "/", key: "blog",   label: "blog",
        megaMenu: [
            {  id:"1", href: "/", label: "filter",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },
                    { id:"2", href: "/", label: "Standard With Banner" },
                    { id:"3", href: "/", label: "Categories Image 1" },
                    { id:"4", href: "/", label: "Categories Image 2" },
                    { id:"5", href: "/", label: "Fullwidth" },
                    { id:"6", href: "/", label: "List view" },
                    { id:"7", href: "/", label: "Simple" },
                    { id:"8", href: "/", label: "MansonryHot" },
                    { id:"9", href: "/", label: "Overlay Header" },
                    { id:"10", href: "/", label: "Collection List 1" },
                    { id:"11", href: "/", label: "Collection List 2" },
                    { id:"12", href: "/", label: "Collection SliderNew" },
            ]
            },
            {  id:"2", href: "/", label: "Blog",
                subMenu:[
                    { id:"1", href: "/", label: "Blog Classic" },
                    { id:"2", href: "/", label: "Blog Grid" },
                    { id:"3", href: "/", label: "Blog Masonry" },                    
            ]                               
            }, 
            {  id:"3", href: "/", label: "Pages",
                subMenu:[
                    { id:"1", href: "/", label: "About" },
                    { id:"2", href: "/", label: "Contact" },
                    { id:"3", href: "/", label: "Cart" },
                    { id:"4", href: "/", label: "Checkout" },
                    { id:"5", href: "/", label: "Compare" },
                    { id:"6", href: "/", label: "Wishlist" },
                    { id:"7", href: "/", label: "My Account" },
                    { id:"8", href: "/", label: "Order Complete" },                    
            ]                               
            }, 
            {  id:"4", href: "/", label: "loaded & cart",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },   
                    { id:"2", href: "/", label: "Simple" },
                    { id:"3", href: "/", label: "Overlay" },
                    { id:"4", href: "/", label: "Overlay Side" },
                    { id:"5", href: "/", label: "Overlay Side New" },
                    { id:"6", href: "/", label: "Without Sidebar" },    
            ]                               
            },
                                       
            
                ],
    },

    { href: "/", key: "feature",   label: "feature",
        megaMenu: [
            {  id:"1", href: "/", label: "Logbook",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },   
                    { id:"2", href: "/", label: "Simple" },
                    { id:"3", href: "/", label: "Overlay" },
                    { id:"4", href: "/", label: "Overlay Side" },
                    { id:"5", href: "/", label: "Overlay Side New" },
                    { id:"6", href: "/", label: "Without Sidebar" },    
            ]                               
            },
            {  id:"2", href: "/", label: "Blog",
                subMenu:[
                    { id:"1", href: "/", label: "Blog Classic" },
                    { id:"2", href: "/", label: "Blog Grid" },
                    { id:"3", href: "/", label: "Blog Masonry" },                    
            ]                               
            }, 
            {  id:"3", href: "/", label: "Pages",
                subMenu:[
                    { id:"1", href: "/", label: "About" },
                    { id:"2", href: "/", label: "Contact" },
                    { id:"3", href: "/", label: "Cart" },
                    { id:"4", href: "/", label: "Checkout" },
                    { id:"5", href: "/", label: "Compare" },
                    { id:"6", href: "/", label: "Wishlist" },
                    { id:"7", href: "/", label: "My Account" },
                    { id:"8", href: "/", label: "Order Complete" },                    
            ]                               
            },                            
            {  id:"4", href: "/", label: "portfolio",
                subMenu:[
                    { id:"1", href: "/", label: "Standard" },
                    { id:"2", href: "/", label: "Standard With Banner" },
                    { id:"3", href: "/", label: "Categories Image 1" },
                    { id:"4", href: "/", label: "Categories Image 2" },
                    { id:"5", href: "/", label: "Fullwidth" },
                    { id:"6", href: "/", label: "List view" },
                    { id:"7", href: "/", label: "Simple" },
                    { id:"8", href: "/", label: "MansonryHot" },
                    { id:"9", href: "/", label: "Overlay Header" },
                    { id:"10", href: "/", label: "Collection List 1" },
                    { id:"11", href: "/", label: "Collection List 2" },
                    { id:"12", href: "/", label: "Collection SliderNew" },
            ]
            },
                ],
    },

]
// social icons
export const navIcons = [
    { id: "search", href: "#", icon: searchIcon },
    { id: "login", href: "#", icon: login },
    { id: "wishlist", href: "#", icon: wishlist },
    { id: "cart", href: "#", icon: cart },
  ];