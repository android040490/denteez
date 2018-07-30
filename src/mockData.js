import company1 from 'assets/images/company1.jpg'; 
import company2 from 'assets/images/company2.jpg'; 
import company3 from 'assets/images/company3.jpg';
import person1 from 'assets/images/Person1.jpg';
import person2 from 'assets/images/Person2.jpg';
import person3 from 'assets/images/Person3.jpg';
import product1 from 'assets/images/product1.jpg';
import product2 from 'assets/images/product2.jpg';
 

export const CompaniesData = [
    {   
        id : '1',
        image : company1,
        title : 'Company Name',
        services : 'Manufacturer',
        address : 'Belgrade, Serbia'
    },
    {
        id : '2',
        image : company2,
        title : 'Company Name',
        services : 'Service Provider',
        address : 'New York, USA'
    },
    {   
        id : '3',
        image : company3,
        title : 'Company Name',
        services : 'Supplier',
        address : 'London, England'
    },
];

export const PersonsData = [
    {
    id : '1',
    image : person1,
    name : 'Dennis Adams',
    profession : 'Dentist (Practice Owner)',
    location : 'London, England'
    },    
    {
    id : '2',
    image : person2,
    name : 'Mary Carpenter',
    profession : 'Dentist (Practice Owner)',
    location : 'Belgrade, Serbia'
    },  
    {
    id : '3',            
    image : person3,
    name : 'Danielle Salazar',
    profession : 'Dentist (Practice Owner)',
    location : 'Paris, France'
    }    
]

export const ProductsData = [
    {
    id : '1',
    image : product1,
    name : "Product Name",
    description : 'Product Short Description. The quick brown fox jumps over the lazy dog.'
    },
    {
    id : '2',
    image : product2,
    name : 'Product Name',
    description : 'Product Short Description. The quick brown fox jumps over the lazy dog.'
    }
]