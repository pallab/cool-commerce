// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
};


export function fetchProductsByFilters(filters) {
//  filters = {'category': 'phone'}
  let queryString = '';
  for(let key in filters){
    queryString += `${key}=${filters[key]}&`
  };

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
};


export function fetchProductById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/products/'+id)
      const data = await response.json()
      resolve({data})
    }
      // setTimeout(() => resolve({ data: amount }), 500)
    );
};