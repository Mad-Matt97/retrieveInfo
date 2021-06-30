const getUsuarios = async () => {
 try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
    } catch (error) {
       console.log(error) 
    }
const data = await response.json();
console.log(data);
};
    
    getUsuarios();