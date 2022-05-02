

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};

export const buscar = async(texto) => {
     return  await fetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${texto}`)                                      
};

export const description = async (id) => {
    return await fetchData(`https://api.mercadolibre.com/items/${id}`);       
};

export const textProduct = async (id) => {
    return await fetchData(`https://api.mercadolibre.com/items/${id}/description`);  
};

export const categoria = async (idCategoria) => {    
    if (!idCategoria) return false;
    return await fetchData(`https://api.mercadolibre.com/categories/${idCategoria}`); 
};